import css from "../ProductTable.module.css";
import {
  FormatNumber,
  Mode,
} from "../../../../../features/invoice/createInvoiceFeature/InvoiceUtil.ts";
import { InvoiceDetailsDTO } from "../../../../../shared/backendTypes/InvoiceTypes.ts";

interface Props {
  mode: Mode;
  productList: InvoiceDetailsDTO[];
  handleUpdateProduct: (newProduct: InvoiceDetailsDTO) => void;
  handleDeleteRow: (id: number) => void;
}

export function TableRow({
  mode,
  productList,
  handleUpdateProduct,
  handleDeleteRow,
}: Props) {
  return (
    <>
      {productList.map((product) => {
        return (
          <div key={product.invoiceDetailsId} className={css.Grid}>
            <div className={css.GridRow}>
              {Mode.editMode == mode ? (
                <textarea
                  onChange={(event) => {
                    product.description = event.target.value;
                    handleUpdateProduct(product);
                  }}
                  value={product.description}
                  style={{ width: "100%" }}
                />
              ) : (
                <p className={css.p}>{product.description}</p>
              )}
            </div>
            <div className={css.GridRow}>
              {Mode.editMode == mode ? (
                <input
                  onChange={(event) => {
                    if (event.target.value == "") {
                      product.wagePerGm = 0;
                      handleUpdateProduct(product);
                    } else if (Number(event.target.value)) {
                      product.wagePerGm = parseInt(event.target.value);
                      handleUpdateProduct(product);
                    }
                  }}
                  placeholder="0"
                  value={product.wagePerGm == 0 ? "" : product.wagePerGm}
                  style={{ width: "100%" }}
                />
              ) : (
                <p className={css.p}>{FormatNumber(product.wagePerGm)}</p>
              )}
            </div>
            <div className={css.GridRow}>
              {Mode.editMode == mode ? (
                <input
                  onChange={(event) => {
                    if (event.target.value === "") {
                      product.pricePerGm = 0;
                      handleUpdateProduct(product);
                    } else if (Number(event.target.value)) {
                      product.pricePerGm = parseInt(event.target.value);
                      handleUpdateProduct(product);
                    }
                  }}
                  placeholder="0"
                  value={product.pricePerGm == 0 ? "" : product.pricePerGm}
                  type="number"
                  min="0"
                  style={{ width: "100%" }}
                />
              ) : (
                <p className={css.p}>{FormatNumber(product.pricePerGm)}</p>
              )}
            </div>
            <div className={css.GridRow}>
              {Mode.editMode == mode ? (
                <input
                  onChange={(event) => {
                    if (event.target.value === "") {
                      product.goldKarat = 0;
                      handleUpdateProduct(product);
                    } else if (Number(event.target.value)) {
                      product.goldKarat = parseInt(event.target.value);
                      handleUpdateProduct(product);
                    }
                  }}
                  placeholder="0"
                  value={product.goldKarat == 0 ? "" : product.goldKarat}
                  type="number"
                  min="0"
                  style={{ width: "100%" }}
                />
              ) : (
                <p className={css.p}>{FormatNumber(product.goldKarat)}</p>
              )}
            </div>
            <div className={css.GridRow}>
              {Mode.editMode == mode ? (
                <input
                  onChange={(event) => {
                    if (event.target.value === "") {
                      product.weightGm = 0;
                      handleUpdateProduct(product);
                    } else if (Number(event.target.value)) {
                      product.weightGm = parseInt(event.target.value);
                      handleUpdateProduct(product);
                    }
                  }}
                  placeholder="0"
                  value={product.weightGm == 0 ? "" : product.weightGm}
                  type="number"
                  min="0"
                  style={{ width: "100%" }}
                />
              ) : (
                <p className={css.p}>{FormatNumber(product.weightGm)}</p>
              )}
            </div>
            <div className={css.GridRow}>
              {Mode.editMode == mode ? (
                <input
                  onChange={(event) => {
                    if (event.target.value === "") {
                      product.weightMg = 0;
                      handleUpdateProduct(product);
                    } else if (Number(event.target.value)) {
                      product.weightMg = parseInt(event.target.value);
                      handleUpdateProduct(product);
                    }
                  }}
                  placeholder="0"
                  value={product.weightMg == 0 ? "" : product.weightMg}
                  type="number"
                  min="0"
                  style={{ width: "100%" }}
                />
              ) : (
                <p className={css.p}>{FormatNumber(product.weightMg)}</p>
              )}
            </div>

            <div className={css.GridRow}>
              <p className={css.p}>
                {FormatNumber(
                  product.wagePerGm * (product.weightGm + product.weightMg / 1000) + product.pricePerGm * (product.weightGm + product.weightMg / 1000),
                )}{" "}
              </p>
              {mode == Mode.editMode ? (
                <button
                  onClick={() => handleDeleteRow(product.invoiceDetailsId)}
                  className={css.RemoveRowButton}
                >
                  x
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
