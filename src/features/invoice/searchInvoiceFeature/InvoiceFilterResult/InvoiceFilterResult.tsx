import css from "./InvoiceFilterResult.module.css";
import {InvoiceDTO} from "../../../../shared/backendTypes/InvoiceTypes.ts";
import {Loading} from "../../../../components/loading/loading/Loading.tsx";
import {InvoiceFilterItem} from "./invoiceFilterItem/InvoiceFilterItem.tsx";

interface InvoiceFilterResultProps {
    invoiceListDTO: InvoiceDTO[] | null,
    displayMessage: string
}

export function InvoiceFilterResult({invoiceListDTO, displayMessage}: InvoiceFilterResultProps) {

    if (invoiceListDTO== null)return (
        <>
            <div className={css.InvoiceFilterResultDiv}>
                <Loading/>
            </div>
        </>
    );


    return (
        <>
            <div className={css.InvoiceFilterResultDiv}>

                {displayMessage !== "" ? displayMessage :
                    invoiceListDTO.map(invoiceDTO =>
                        <InvoiceFilterItem
                            key={invoiceDTO.invoiceInfo.invoiceId}
                            invoiceDTO={invoiceDTO}
                        />)
                }
            </div>
        </>
    );
}
