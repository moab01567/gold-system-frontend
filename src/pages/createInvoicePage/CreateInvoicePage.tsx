import * as UrlChanger from "../../shared/util/URLChanger.ts";
import { PageLayout } from "../pageLayout/PageLayout.tsx";
import css from "./CreateInvoicePage.module.css";
import { InvoiceFeature } from "../../features/invoice/createInvoiceFeature/InvoiceFeature.tsx";
import { GetUserDTO } from "../../shared/backendTypes/BackendTypes.ts";
import {staticPageData} from "../StaticPageData.ts";

interface Props {
  user: GetUserDTO | null;
}

export function CreateInvoicePage({ user }: Props) {
  UrlChanger.ChangeUrlPath(staticPageData.createInvoice.path);
  return (
    <>
      <PageLayout
        currentPage={staticPageData.createInvoice}
        pageContent={
          <div className={css.HolePage}>
            <InvoiceFeature invoiceName={user?.invoiceName ?? ""} />
          </div>
        }
      />
    </>
  );
}
