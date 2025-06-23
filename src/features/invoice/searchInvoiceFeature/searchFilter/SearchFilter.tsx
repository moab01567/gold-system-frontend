import css from "./SearchFilter.module.css";
import {PhoneInput} from "react-international-phone";
import {useEffect, useState} from "react";
import {GetSessionStorageValue, RemoveKeySessionStorage, SessionStorageKey} from "../../../../shared/storage/SessionStorage.ts";


interface SearchFilterProps {
    handleRequest: (invoiceNumber: string, date: string, phoneNumber: string) => void
}

export function SearchFilter({handleRequest}: SearchFilterProps) {
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [date, setDate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleFilterClick = () => {
      handleRequest(invoiceNumber, date, phoneNumber)
    };

    useEffect(() => {
        const invoiceId: string| null = GetSessionStorageValue(SessionStorageKey.INVOICE_ID_KEY)
        if(invoiceId){
            setInvoiceNumber(invoiceId)
            RemoveKeySessionStorage(SessionStorageKey.INVOICE_ID_KEY)
            handleRequest(invoiceId, "", "")
        }
    }, []);

    return (
        <>
            <div className={css.mainDiv}>
                <div className={css.searchItemDiv}>
                    <input
                        onChange={(e) => setInvoiceNumber(e.target.value)}
                        value={invoiceNumber}
                        className={css.searchInput}
                        min={0}
                        placeholder={"Invoice Number / " + "رقم الفاتورة"}
                        type="number"
                    />
                </div>
                <div className={css.searchItemDiv}>
                    <input
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        className={css.searchInput}
                        type="date"
                    />
                </div>
                <div className={css.searchItemDiv}>
                    <PhoneInput
                        onChange={(e) => setPhoneNumber(e)}
                        value={phoneNumber}
                        className={css.searchInput}
                        defaultCountry={"iq"}
                    />
                </div>
                <div className={css.searchItemDiv}>
                    <button className={css.button} onClick={handleFilterClick}>
                        <span>Search Invoice  </span>
                        <span>البحث عن فاتورة</span></button>
                </div>
            </div>
        </>
    );
}
