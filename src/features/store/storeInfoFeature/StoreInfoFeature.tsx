import {useEffect, useState} from "react";
import {StoreInvoiceService} from "./StoreInvoiceService.ts";
import {GetStoreDTO} from "../../../shared/backendTypes/BackendTypes.ts";
import css from "./StoreInfoFeature.module.css"
import {Loading} from "../../../components/loading/loading/Loading.tsx";


export function StoreInfoFeature(){
    const [mg, setMg] = useState<number>(0);
    const [g, setG] = useState<number>(0);
    const [message, setMessage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true);

    const getStoreInfo =  async ()=>{
        setMessage("")
        setLoading(true)
        const storeInfo:GetStoreDTO | null = await StoreInvoiceService()

        if(storeInfo){
            const g = Math.floor(storeInfo.goldInMg / 1000);
            const mg = storeInfo.goldInMg % 1000
            setG(g)
            setMg(mg)
        }else {
            setMessage("Cloud Not Get Store Info / تعذر الحصول على معلومات المتجر")
        }

        setLoading(false)
    }

    useEffect(() => {
        getStoreInfo()
    }, []);


    if (message !== "") {
        return <>
            <div className={css.storeFeatureDiv}>
                <div className={css.storeContentDiv}>
                    <h2>Gold balance رصيدك من الذهب</h2>
                    {message}
                </div>
            </div>
        </>
    }

    return<>
        <div className={css.storeFeatureDiv}>
            <div className={css.storeContentDiv}>
                <h2>Gold balance رصيدك من الذهب</h2>
                {loading ?
                    <Loading/>
                    :
                    <h3>{g}g {mg}mg</h3>}
            </div>
        </div>
    </>




}