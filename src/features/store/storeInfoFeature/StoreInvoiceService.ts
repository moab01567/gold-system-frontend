import {HeaderBuilder} from "../../../shared/http/HeaderBuilder.ts";
import {RequestHandler} from "../../../shared/http/RequestHandler.tsx";
import {GetStoreDTO} from "../../../shared/backendTypes/BackendTypes.ts";


export async function StoreInvoiceService(){
    try{
        const request = HeaderBuilder("/store/info","GET");
       return await RequestHandler<GetStoreDTO>(request,false,true);
    }catch (e){
        console.error(e);
        return null;
    }
}