import {InvoiceInfo} from "../../../../../components/invoiceTemplate/invoiceInfo/InvoiceInfo.tsx";
import {Mode} from "../../../createInvoiceFeature/InvoiceUtil.ts";
import {InvoiceDTO} from "../../../../../shared/backendTypes/InvoiceTypes.ts";
import css from "./InvoiceFilterItem.module.css"
import {useState} from "react";
import {InvoiceTemplate} from "../../../../../components/invoiceTemplate/InvoiceTemplate.tsx";
import {GeneratePDF2} from "../../../../PDF/GeneratePDF2.tsx";
import {Loading} from "../../../../../components/loading/loading/Loading.tsx";


interface InvoiceFilterItemProps {
    invoiceDTO: InvoiceDTO
}

export function InvoiceFilterItem({invoiceDTO}: InvoiceFilterItemProps) {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const handleDownload = async ()=>{
        setLoading(true)
        await GeneratePDF2(invoiceDTO)
        setLoading(false)
    }


    return <>
        <div className={css.mainDiv}>
            <div onClick={()=>setOpen(!open)} className={css.ItemDiv}>
                <InvoiceInfo mode={Mode.printMode}
                             handleUpdateInvoiceInfo={()=>{}}
                             invoiceInfoData={invoiceDTO.invoiceInfo}
                             invoiceName={invoiceDTO.invoiceInfo.invoiceSaleName}/>
            </div>
            <div className={css.buttonDiv}>
                {!open? "" :
                    <button onClick={handleDownload} className={css.button}>
                    {!loading ? <><span>Download</span><span>تحميل الفاتورة</span></> : <Loading/>}
                </button>}
            </div>

            <div className={css.openInvoiceDiv}>
                {!open?
                    <></>
                    : <InvoiceTemplate
                        mode={Mode.printMode}
                        invoiceDetails={invoiceDTO.invoiceDetails}
                        handleUpdateProduct={()=>{}}
                        handleCreateRow={()=>{}}
                        handleDeleteRow={()=>{}}
                        handleUpdateInvoiceInfo={()=>{}}
                        invoiceInfoData={invoiceDTO.invoiceInfo}
                        invoiceName={invoiceDTO.invoiceInfo.invoiceSaleName}/>}
            </div>
        </div>
    </>
}