import css from "./PageLayout.module.css";
import { ReactElement } from "react";
import { PageData, staticPageData } from "../StaticPageData.ts";
import { useNavigate } from "react-router-dom";

interface Props {
  pageContent: ReactElement;
  currentPage: PageData;
}

export const PageLayout = ({ pageContent, currentPage }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={css.pageLayout}>
        <header className={css.header}>
          <h1>AlHadara Company</h1>
        </header>

        <div className={css.menu}>
          <button
              onClick={() => {
                navigate(staticPageData.storePage.path);
              }}
              className={
                currentPage == staticPageData.storePage
                    ? css.menuButtonSelected
                    : css.menuButton
              }
          >
            <span>Store</span> <span>محل</span>
          </button>
          <button
            onClick={() => {
              navigate(staticPageData.createInvoice.path);
            }}
            className={
              currentPage == staticPageData.createInvoice
                ? css.menuButtonSelected
                : css.menuButton
            }
          >
            <span>Create Invoice</span> <span>إنشاء فاتورة</span>
          </button>
          <button
            onClick={() => {
              navigate(staticPageData.searchInvoice.path);
            }}
            className={
              currentPage == staticPageData.searchInvoice
                ? css.menuButtonSelected
                : css.menuButton
            }
          >
            <span>Search Invoice</span> <span>البحث عن فاتورة</span>
          </button>
          <button
            onClick={() => {
              navigate(staticPageData.account.path);
            }}
            className={
              currentPage == staticPageData.account
                ? css.menuButtonSelected
                : css.menuButton
            }
          >
            <span>Account</span> <span>حساب</span>
          </button>
          <button
            onClick={() => {
              navigate(staticPageData.logout.path);
            }}
            className={
              currentPage == staticPageData.logout
                ? css.menuButtonSelected
                : css.menuButton
            }
          >
            <span>Logout</span> <span>تسجيل الخروج</span>
          </button>
        </div>
        <div className={css.contentDiv}>{pageContent}</div>
      </div>
    </>
  );
};
