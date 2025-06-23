import "react-international-phone/style.css";
import { SearchFilter } from "./searchFilter/SearchFilter.tsx";
import css from "./SearchInvoiceFeature.module.css";
import { InvoiceFilterResult } from "./InvoiceFilterResult/InvoiceFilterResult.tsx";
import { useState } from "react";
import {SearchInvoiceService} from "./SearchInvoiceService.ts";
import {GetListInvoiceDTO, InvoiceDTO} from "../../../shared/backendTypes/InvoiceTypes.ts";

export function SearchInvoiceFeature() {
  const [invoiceListDTO, setInvoiceListDTO] =
    useState<InvoiceDTO[] | null>([]);
    const [displayMessage, setDisplayMessage] = useState<string>("");

    const handleRequest = async (invoiceNumber:string,date:string, phoneNumber:string)=>{
        setInvoiceListDTO(null);
        const data:GetListInvoiceDTO | undefined = await SearchInvoiceService(invoiceNumber, date,phoneNumber,setDisplayMessage)
        if (data == undefined){
            setInvoiceListDTO([])
        }else{
            setInvoiceListDTO(data.invoiceDTOList)
        }
    }


  return (
    <>
      <div className={css.searchInvoiceFeatureDiv}>
        <SearchFilter handleRequest={handleRequest} />
         <InvoiceFilterResult invoiceListDTO={invoiceListDTO} displayMessage={displayMessage} />
      </div>
    </>
  );
}
