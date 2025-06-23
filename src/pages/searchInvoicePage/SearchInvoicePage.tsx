import * as UrlChanger from "../../shared/util/URLChanger.ts";
import { PageLayout } from "../pageLayout/PageLayout.tsx";
import css from "./SearchInvoicePage.module.css";
import { SearchInvoiceFeature } from "../../features/invoice/searchInvoiceFeature/SearchInvoiceFeature.tsx";
import {staticPageData} from "../StaticPageData.ts";


export function SearchInvoicePage() {
  UrlChanger.ChangeUrlPath(staticPageData.searchInvoice.path);

  return (
    <>
      <PageLayout
        currentPage={staticPageData.searchInvoice}
        pageContent={
          <div className={css.pageDiv}>
            <div className={css.searchFeatureDiv}>
                    <SearchInvoiceFeature />
            </div>
          </div>
        }
      />
    </>
  );
}
