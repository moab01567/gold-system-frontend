import {HeaderBuilder} from "../../../shared/http/HeaderBuilder.ts";
import {GetListInvoiceDTO} from "../../../shared/backendTypes/InvoiceTypes.ts";
import {RequestHandler} from "../../../shared/http/RequestHandler.tsx";


export async function SearchInvoiceService(invoiceId:string,date:string,phoneNumber:string, setDisplayMessage:(message:string)=>void):Promise<GetListInvoiceDTO |undefined>{
    try{
        const request = HeaderBuilder(`/invoice?invoiceId=${invoiceId}&date=${date}&phoneNumber=${phoneNumber}`,"GET")
        const data:GetListInvoiceDTO= await RequestHandler<GetListInvoiceDTO>(request, false, true );
        if (data.invoiceDTOList.length == 0){
            setDisplayMessage("Invoice not found / لم يتم العثور على الفاتورة");
        }else{
            setDisplayMessage("");
        }
        return data;
    }catch (e){
        console.error(e)
        setDisplayMessage("Something went wrong, cloud not get invoice");
    }

}