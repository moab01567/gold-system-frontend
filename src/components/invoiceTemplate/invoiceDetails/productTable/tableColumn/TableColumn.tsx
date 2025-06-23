import css from "../ProductTable.module.css";

export function TableColumn() {
  return (
    <>
      <div className={css.Grid}>
        <div className={css.GridColumn}>
          <p className={css.p}>The Details&nbsp;</p>
          <p className={css.p}>التفاصيل</p>
        </div>
        <div className={css.GridColumn}>
          <p className={css.p}>Wage per gram&nbsp;</p>
          <p className={css.p}>أجرة الغرام</p>
        </div>
        <div className={css.GridColumn}>
          <p className={css.p}>Price Of Gm&nbsp;</p>
          <p className={css.p}>سعر الغرام</p>
        </div>
        <div className={css.GridColumn}>
          <p className={css.p}>Gold Karat&nbsp;</p>
          <p className={css.p}>عيار الذهب</p>
        </div>
        <div
          style={{ gridColumn: "5 /span 2" }}
          className={css.GridColumnWeight}
        >
          <div className={css.GridColumnWeightText}>
            <p className={css.p}>Weight&nbsp;</p>
            <p className={css.p}>الوزن</p>
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
          <p className={css.p}>القيمة بالدينار العراقي</p>
          <p className={css.p}>Value in Iraqi Dinars</p>
        </div>
      </div>
    </>
  );
}
