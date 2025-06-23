import css from "./SummeryTable.module.css";
import { FormatNumber } from "../../../../features/invoice/createInvoiceFeature/InvoiceUtil.ts";
import {
  InvoiceDetailsDTO,
  TransactionType,
} from "../../../../shared/backendTypes/InvoiceTypes.ts";

interface SummeryBuyOrSell {
  totalWage: number;
  totalValueBeforeWage: number;
  totalGm: number;
  totalMg: number;
  totalValueInDinar: number;
}

interface Props {
  productList: InvoiceDetailsDTO[];
}

function calculateSummery(
  type: TransactionType,
  productList: InvoiceDetailsDTO[],
): SummeryBuyOrSell {
  const summery: SummeryBuyOrSell = {
    totalWage: 0,
    totalValueBeforeWage: 0,
    totalGm: 0,
    totalMg: 0,
    totalValueInDinar: 0,
  };

  productList.forEach((product) => {
    if (product.transactionType != type) return;
    summery.totalWage +=
      product.wagePerGm * (product.weightGm + product.weightMg / 1000);
    summery.totalGm += product.weightGm;
    summery.totalMg += product.weightMg;
    summery.totalValueBeforeWage +=
      product.pricePerGm * (product.weightGm + product.weightMg / 1000);
    summery.totalValueInDinar +=
      summery.totalValueBeforeWage + summery.totalWage;
  });

  return summery;
}

export function SummeryTable({ productList }: Props) {
  const saleSummery: SummeryBuyOrSell = calculateSummery(
    TransactionType.sale,
    productList,
  );
  const purchaseSummery: SummeryBuyOrSell = calculateSummery(
    TransactionType.purchase,
    productList,
  );

  return (
    <>
      <div className={css.Grid}>
        <div style={{ gridColumn: "1 / span 6" }} className={css.GridColumn}>
          <h3>Summary&nbsp;</h3>
          <h3>ملخص الفاتورة</h3>
        </div>
        <div className={css.GridColumn}>
          <p className={css.p}>Transaction Type&nbsp;</p>
          <p className={css.p}>نوع المعاملة</p>
        </div>
        <div className={css.GridColumn}>
          <p className={css.p}>Total Wage:&nbsp;</p>
          <p className={css.p}>مجموع الأجرة</p>
        </div>
        <div className={css.GridColumn}>
          <p className={css.p}>Total Value (before wage)&nbsp;</p>
          <p className={css.p}>القيمة قبل الأجرة</p>
        </div>
        <div className={css.GridColumnWeight}>
          <div className={css.GridColumnWeightText}>
            <p className={css.p}>Total Weight&nbsp;</p>
            <p className={css.p}>الوزن الكلي</p>
          </div>
          <div className={css.GridColumnWeightTextGmAndMg}>
            <p className={css.p}>Gm&nbsp;</p>
            <p className={css.p}>غرام</p>
          </div>
          <div className={css.GridColumnWeightTextGmAndMg}>
            <p className={css.p}>Mg&nbsp;</p>
            <p className={css.p}>ملغم</p>
          </div>
        </div>
        <div className={css.GridColumn}>
          <p className={css.p}>Total Value(IQD)</p>
          <p className={css.p}>القيمة الكلية</p>
        </div>
        <div className={css.GridRow}>
          <p className={css.p}>
            Gold Sale
            <br /> بيع الذهب
          </p>
        </div>
        <div className={css.GridRow}>
          <p className={css.p}>{FormatNumber(saleSummery.totalWage)}</p>
        </div>

        <div className={css.GridRow}>
          <p className={css.p}>
            {FormatNumber(saleSummery.totalValueBeforeWage)}
          </p>
        </div>
        <div className={css.GridRow}>
          <p className={css.p}>{FormatNumber(saleSummery.totalGm)}</p>
        </div>
        <div className={css.GridRow}>
          <p className={css.p}>{FormatNumber(saleSummery.totalMg)}</p>
        </div>
        <div className={css.GridRow}>
          <p className={css.p}>{FormatNumber(saleSummery.totalValueInDinar)}</p>
        </div>
        <div className={css.GridRow}>
          <p className={css.p}>
            Gold Purchase
            <br /> شراء الذهب
          </p>
        </div>
        <div className={css.GridRow}>
          <p className={css.p}>{FormatNumber(purchaseSummery.totalWage)}</p>
        </div>
        <div className={css.GridRow}>
          <p className={css.p}>
            {FormatNumber(purchaseSummery.totalValueBeforeWage)}
          </p>
        </div>
        <div className={css.GridRow}>
          <p className={css.p}>{FormatNumber(purchaseSummery.totalGm)}</p>
        </div>
        <div className={css.GridRow}>
          <p className={css.p}>{FormatNumber(purchaseSummery.totalMg)}</p>
        </div>
        <div className={css.GridRow}>
          <p className={css.p}>
            {FormatNumber(purchaseSummery.totalValueInDinar)}
          </p>
        </div>
        <div
          className={css.GridColumnSummery}
          style={{ gridColumn: "1/ span 6" }}
        >
          <p className={css.p}>
            <strong>
              {" "}
              {saleSummery.totalValueInDinar -
                purchaseSummery.totalValueInDinar >=
              0
                ? "Customer Pays الزبون يدفع"
                : "Payout to Customer الدفع للزبون"}
            </strong>
          </p>

          <p className={css.p}>
            <strong>
              {saleSummery.totalValueInDinar -
                purchaseSummery.totalValueInDinar >=
              0
                ? FormatNumber(
                    saleSummery.totalValueInDinar -
                      purchaseSummery.totalValueInDinar,
                  )
                : FormatNumber(
                    purchaseSummery.totalValueInDinar -
                      saleSummery.totalValueInDinar,
                  )}
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
