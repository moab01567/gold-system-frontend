import css from "./ProductTable.module.css";
import { Mode } from "../../../../features/invoice/createInvoiceFeature/InvoiceUtil.ts";
import { TableTitle } from "./tableTitle/TableTitle.tsx";
import { TableColumn } from "./tableColumn/TableColumn.tsx";
import { TableRow } from "./tableRow/TableRow.tsx";
import {
  InvoiceDetailsDTO,
  TransactionType,
} from "../../../../shared/backendTypes/InvoiceTypes.ts";

interface Props {
  mode: Mode;
  productList: InvoiceDetailsDTO[];
  handleUpdateProduct: (newProduct: InvoiceDetailsDTO) => void;
  title: string;
  handleCreateRow: (transactionType: TransactionType) => void;
  transactionType: TransactionType;
  handleDeleteRow: (id: number) => void;
}

export function ProductTable({
  title,
  productList,
  mode,
  handleUpdateProduct,
  handleCreateRow,
  transactionType,
  handleDeleteRow,
}: Props) {
  if (mode == Mode.printMode && productList.length == 0) return <></>;

  return (
    <>
      <div className={css.mainGrid}>
        <TableTitle title={title} />
        <TableColumn />
        <TableRow
          handleDeleteRow={handleDeleteRow}
          productList={productList}
          handleUpdateProduct={handleUpdateProduct}
          mode={mode}
        />
        {Mode.editMode == mode ? (
          <button
            className={css.AddRowButton}
            onClick={() => {
              handleCreateRow(transactionType);
            }}
          >
            +
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
