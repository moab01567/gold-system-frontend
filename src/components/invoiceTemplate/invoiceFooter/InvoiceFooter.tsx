import css from "./InvoiceFooter.module.css";

export function InvoiceFooter() {
  return (
    <div className={css.mainDiv}>
      <p className={css.p + " " + css.pFont}>Signatur/</p>
      <p className={css.pFont}>التوقيع</p>
      <p className={css.pFont}>:</p>
      <p className={css.pFont}>______________________</p>
    </div>
  );
}
