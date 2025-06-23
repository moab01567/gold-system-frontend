import css from "./InvoiceInfo.module.css";
import { Mode } from "../../../features/invoice/createInvoiceFeature/InvoiceUtil.ts";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { InvoiceInfoDTO } from "../../../shared/backendTypes/InvoiceTypes.ts";

interface Props {
  mode: Mode;
  handleUpdateInvoiceInfo: (invoiceInfo: InvoiceInfoDTO) => void;
  invoiceInfoData: InvoiceInfoDTO;
  invoiceName: string;
}

export function InvoiceInfo({
  mode,
  handleUpdateInvoiceInfo,
  invoiceInfoData,
  invoiceName,
}: Props) {
  if (mode == Mode.editMode) {
    return (
      <div className={css.InvoiceInfoTopDiv}>
        <div className={css.InvoiceInfoDiv}>
          <div className={css.InvoiceInfoDivP}>
            <p className={css.InvoiceInfoP}>{invoiceInfoData.invoiceId} :</p>
            <p className={css.InvoiceInfoP}> رقم الفاتورة</p>
          </div>
          <div className={css.InvoiceInfoDivP}>
            <input
              type={"date"}
              value={invoiceInfoData.invoiceDate}
              onChange={(event) => {
                const updatedInvoiceInfo = {
                  ...invoiceInfoData,
                  invoiceDate: event.target.value,
                };

                handleUpdateInvoiceInfo(updatedInvoiceInfo);
              }}
            />
          </div>
          <div className={css.InvoiceInfoDivP}>
            <p className={css.InvoiceInfoP}>{invoiceName} :</p>
            <p className={css.InvoiceInfoP}>البائع</p>
          </div>
          <div className={css.InvoiceInfoDivP}>
            <p className={css.InvoiceInfoP}>المدير المفوض: أحمد حسن صالح</p>
          </div>
        </div>
        <div className={css.InvoiceInfoDiv}>
          <div className={css.InvoiceInfoDivP}>
            <PhoneInput
              onChange={(phoneNumber) => {
                const updatedInvoiceInfo: InvoiceInfoDTO = {
                  ...invoiceInfoData,
                  customerPhone: phoneNumber,
                };
                handleUpdateInvoiceInfo(updatedInvoiceInfo);
              }}
              value={invoiceInfoData.customerPhone}
              defaultCountry="iq"
            ></PhoneInput>
          </div>
          <div className={css.InvoiceInfoDivP}>
            <input
              value={invoiceInfoData.customerAddress}
              onChange={(event) => {
                const updatedInvoiceInfo: InvoiceInfoDTO = {
                  ...invoiceInfoData,
                  customerAddress: event.target.value,
                };

                handleUpdateInvoiceInfo(updatedInvoiceInfo);
              }}
              type="text"
            />
            <p className={css.InvoiceInfoP}>:</p>
            <p className={css.InvoiceInfoP}>العنوان</p>
          </div>
          <div className={css.InvoiceInfoDivP}>
            <input
              value={invoiceInfoData.customerName}
              type="text"
              onChange={(event) => {
                const updatedInvoiceInfo: InvoiceInfoDTO = {
                  ...invoiceInfoData,
                  customerName: event.target.value,
                };

                handleUpdateInvoiceInfo(updatedInvoiceInfo);
              }}
            />
            <p className={css.InvoiceInfoP}>:</p>
            <p className={css.InvoiceInfoP}>المشتري</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={css.InvoiceInfoTopDiv}>
      <div className={css.InvoiceInfoDiv}>
        <div className={css.InvoiceInfoDivP}>
          <p className={css.InvoiceInfoP}>{invoiceInfoData.invoiceId} :</p>
          <p className={css.InvoiceInfoP}> رقم الفاتورة</p>
        </div>
        <div className={css.InvoiceInfoDivP}>
          <p className={css.InvoiceInfoP}>{invoiceInfoData.invoiceDate} :</p>
          <p className={css.InvoiceInfoP}>التاريخ</p>
        </div>
        <div className={css.InvoiceInfoDivP}>
          <p className={css.InvoiceInfoP}>{invoiceName} :</p>
          <p className={css.InvoiceInfoP}>البائع</p>
        </div>
        <div className={css.InvoiceInfoDivP}>
          <p className={css.InvoiceInfoP}>المدير المفوض: أحمد حسن صالح</p>
        </div>
      </div>
      <div className={css.InvoiceInfoDiv}>
        <div className={css.InvoiceInfoDivP}>
          <p className={css.InvoiceInfoP}>{invoiceInfoData.customerPhone} :</p>
          <p className={css.InvoiceInfoP}>رقم الهاتف</p>
        </div>
        <div className={css.InvoiceInfoDivP}>
          <p className={css.InvoiceInfoP}>
            {invoiceInfoData.customerAddress} :
          </p>
          <p className={css.InvoiceInfoP}>العنوان</p>
        </div>
        <div className={css.InvoiceInfoDivP}>
          <p className={css.InvoiceInfoP}>{invoiceInfoData.customerName} :</p>
          <p className={css.InvoiceInfoP}>المشتري</p>
        </div>
      </div>
    </div>
  );
}
