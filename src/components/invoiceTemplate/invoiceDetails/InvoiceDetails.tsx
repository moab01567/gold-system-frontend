import css from "./InvoiceDetails.module.css";
import { Mode } from "../../../features/invoice/createInvoiceFeature/InvoiceUtil.ts";
import { ProductTable } from "./productTable/ProductTable.tsx";
import { SummeryTable } from "./summeryTable/SummeryTable.tsx";
import {
  InvoiceDetailsDTO,
  TransactionType,
} from "../../../shared/backendTypes/InvoiceTypes.ts";

interface Props {
  mode: Mode;
  productList: InvoiceDetailsDTO[];
  handleUpdateProduct: (newProduct: InvoiceDetailsDTO) => void;
  handleCreateRow: (transactionType: TransactionType) => void;
  handleDeleteRow: (id: number) => void;
}

export function InvoiceDetails({
  mode,
  productList,
  handleUpdateProduct,
  handleCreateRow,
  handleDeleteRow,
}: Props) {
  return (
    <div className={css.invoiceDetailsTopDiv}>
      <ProductTable
        handleDeleteRow={handleDeleteRow}
        transactionType={TransactionType.sale}
        handleCreateRow={handleCreateRow}
        title={"Gold Sale بيع الذهب"}
        handleUpdateProduct={handleUpdateProduct}
        mode={mode}
        productList={productList.filter(
          (product) => product.transactionType == TransactionType.sale,
        )}
      />

      <ProductTable
        handleDeleteRow={handleDeleteRow}
        transactionType={TransactionType.purchase}
        handleCreateRow={handleCreateRow}
        title={"Gold Purchase شراء الذهب"}
        handleUpdateProduct={handleUpdateProduct}
        mode={mode}
        productList={productList.filter(
          (product) => product.transactionType == TransactionType.purchase,
        )}
      />

      <SummeryTable productList={productList} />
    </div>
  );
}
