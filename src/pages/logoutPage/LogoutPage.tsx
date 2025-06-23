import {staticPageData} from "../StaticPageData.ts";
import * as UrlChanger from "../../shared/util/URLChanger.ts";
import {useNavigate} from "react-router-dom";
import {RemoveKeySessionStorage, SessionStorageKey} from "../../shared/storage/SessionStorage.ts";

interface Props {
  setAuthenticated: (authenticated: boolean | null) => void;
}

export function LogoutPage({ setAuthenticated }: Props) {
  UrlChanger.ChangeUrlPath(staticPageData.logout.path);
  RemoveKeySessionStorage(SessionStorageKey.TOKEN_KEY);
  const navigate = useNavigate();
  navigate(staticPageData.login.path);
  setAuthenticated(false);
  return <></>;
}
