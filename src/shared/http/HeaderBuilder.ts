import * as TokenStorage from "../storage/SessionStorage.ts";
import { envConfig } from "../../envConfig.ts";
import {SessionStorageKey} from "../storage/SessionStorage.ts";

export function HeaderBuilder(
  UrlPath: string,
  method: string,
  body?: unknown,
): Request {
  if (body == undefined) {
    return new Request(envConfig.API_BACKEND + UrlPath, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TokenStorage.GetSessionStorageValue(SessionStorageKey.TOKEN_KEY)}`,
      },
    });
  }

  return new Request(envConfig.API_BACKEND + UrlPath, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenStorage.GetSessionStorageValue(SessionStorageKey.TOKEN_KEY)}`,
    },
    body: JSON.stringify(body),
  });
}
