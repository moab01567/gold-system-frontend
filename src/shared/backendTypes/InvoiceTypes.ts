export enum TransactionType {
  sale = "sale",
  purchase = "purchase",
}

export const TransactionTypeMap: Map<TransactionType, string> = new Map();
TransactionTypeMap.set(TransactionType.sale, "Buy شراء");
TransactionTypeMap.set(TransactionType.purchase, "Sell بيع");

export interface InvoiceDetailsDTO {
  invoiceDetailsId: number;
  transactionType: TransactionType;
  description: string;
  wagePerGm: number;
  pricePerGm: number;
  goldKarat: number;
  weightGm: number;
  weightMg: number;
}

export interface InvoiceInfoDTO {
  invoiceId: number;
  invoiceSaleName: string;
  invoiceDate: string;
  customerName: string;
  customerAddress: string;
  customerPhone: string;
}

export interface InvoiceDTO {
  invoiceInfo: InvoiceInfoDTO;
  invoiceDetails: InvoiceDetailsDTO[];
}

export interface GetListInvoiceDTO {
  invoiceDTOList: InvoiceDTO[];
  totaleInvoiceDTO: number;
}
