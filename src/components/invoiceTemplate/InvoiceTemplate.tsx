import css from "./InvoiceTemplate.module.css";
import { InvoiceHeader } from "./invoiceHeader/InvoiceHeader.tsx";
import { InvoiceCompanyInfo } from "./invoiceCompanyInfo/InvoiceCompanyInfo.tsx";
import { InvoiceInfo } from "./invoiceInfo/InvoiceInfo.tsx";
import { InvoiceDetails } from "./invoiceDetails/InvoiceDetails.tsx";
import { Mode } from "../../features/invoice/createInvoiceFeature/InvoiceUtil.ts";
import { InvoiceFooter } from "./invoiceFooter/InvoiceFooter.tsx";
import {
  InvoiceDetailsDTO,
  InvoiceInfoDTO,
  TransactionType,
} from "../../shared/backendTypes/InvoiceTypes.ts";

interface Props {
  mode: Mode;
  invoiceDetails: InvoiceDetailsDTO[];
  handleUpdateProduct: (newProduct: InvoiceDetailsDTO) => void;
  handleCreateRow: (transactionType: TransactionType) => void;
  handleDeleteRow: (id: number) => void;
  handleUpdateInvoiceInfo: (invoiceInfo: InvoiceInfoDTO) => void;
  invoiceInfoData: InvoiceInfoDTO;
  invoiceName: string;
}

export function InvoiceTemplate({
  invoiceDetails,
  mode,
  handleUpdateProduct,
  handleCreateRow,
  handleDeleteRow,
  handleUpdateInvoiceInfo,
  invoiceInfoData,
  invoiceName,
}: Props) {
  return (
    <div className={css.divPdfPage}>
      <InvoiceHeader />
      <InvoiceCompanyInfo />
      <InvoiceInfo
        invoiceName={invoiceName}
        invoiceInfoData={invoiceInfoData}
        handleUpdateInvoiceInfo={handleUpdateInvoiceInfo}
        mode={mode}
      />
      <InvoiceDetails
        handleCreateRow={handleCreateRow}
        handleUpdateProduct={handleUpdateProduct}
        mode={mode}
        productList={invoiceDetails}
        handleDeleteRow={handleDeleteRow}
      />
      <InvoiceFooter />
    </div>
  );
}
