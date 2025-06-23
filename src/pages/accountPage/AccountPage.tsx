import {staticPageData} from "../StaticPageData.ts";
import { PageLayout } from "../pageLayout/PageLayout.tsx";
import css from "./AccountPage.module.css";
import { ChangePasswordFeature } from "../../features/account/changePasswordFeature/ChangePasswordFeature.tsx";
import { CreateAccountFeature } from "../../features/account/CreateAccountFeature/CreateAccountFeature.tsx";
import {
  Authority,
  GetUserDTO,
} from "../../shared/backendTypes/BackendTypes.ts";
import {ChangeUrlPath} from "../../shared/util/URLChanger.ts";

interface Props {
  user: GetUserDTO | null;
}

export function AccountPage({ user }: Props) {
  ChangeUrlPath(staticPageData.account.path)
    return (
    <>
      <PageLayout
        pageContent={
          <div className={css.divPageContent}>
            <div className={css.divWrapperChangePasswordFeature}>
              <ChangePasswordFeature />
            </div>
            {user?.authority === Authority.admin ? (
              <div className={css.divWrapperCreateAccountFeature}>
                <CreateAccountFeature />
              </div>
            ) : (
              <></>
            )}
          </div>
        }
        currentPage={staticPageData.account}
      />
    </>
  );
}
