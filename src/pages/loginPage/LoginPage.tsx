import css from "./LoginPage.module.css";
import * as UrlChanger from "../../shared/util/URLChanger.ts";
import { LoginFeature } from "../../features/auth/loginFeature/LoginFeature.tsx";
import {staticPageData} from "../StaticPageData.ts";

interface Props {
  setAuthenticated: (authenticated: boolean | null) => void;
}

export function LoginPage({setAuthenticated }: Props) {
  UrlChanger.ChangeUrlPath(staticPageData.login.path);

  return (
    <>
      <div className={css.holePage}>
        <LoginFeature setAuthenticated={setAuthenticated} />
      </div>
    </>
  );
}
