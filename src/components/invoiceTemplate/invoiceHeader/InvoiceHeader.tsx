import css from "./InvoiceHeader.module.css";

export function InvoiceHeader() {
  return (
    <>
      <div className={css.headerDiv}>
        <div className={css.textEnglishHeaderDiv}>
          <div className={css.englishTextDiv}>
            <p className={css.englishTextTitle}>AlHadara Company</p>
            <p className={css.englishSubText}>
              For Importing Gold, Silver and jewelry
            </p>
            <p className={css.englishSubText}>
              Is a Limited Liability Company, a Private Company
            </p>
          </div>
        </div>
        <div className={css.logo}>
          <img src="logo.png" alt="" />
        </div>

        <div className={css.textArabicHeaderDiv}>
          <div className={css.arabicTextDiv}>
            <p className={css.arabicTextTitle}>شركة الحضارة</p>
            <p className={css.arabicSubText}>
              لاستيراد الذهب والفضة والمجوهرات
            </p>
            <p className={css.arabicSubText}>محدودة المسؤولية شركة خاصة</p>
          </div>
        </div>
      </div>
    </>
  );
}
