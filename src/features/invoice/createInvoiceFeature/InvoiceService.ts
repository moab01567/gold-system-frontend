import {HeaderBuilder} from "../../../shared/http/HeaderBuilder.ts";
import {RequestHandler} from "../../../shared/http/RequestHandler.tsx";

import {InvoiceDetailsDTO, InvoiceDTO, InvoiceInfoDTO,} from "../../../shared/backendTypes/InvoiceTypes.ts";


export async function CreateInvoicePostAPI(
  invoiceInfoData: InvoiceInfoDTO,
  invoiceDetails: InvoiceDetailsDTO[],
) {
  const invoiceInfo: InvoiceDTO = {
    invoiceInfo: invoiceInfoData,
    invoiceDetails: invoiceDetails,
  };

  const request: Request = HeaderBuilder(
    "/invoice/create",
    "POST",
    invoiceInfo,
  );
  return await RequestHandler<InvoiceDTO>(request);
}
