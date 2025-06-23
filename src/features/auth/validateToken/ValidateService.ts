import { envConfig } from "../../../envConfig.ts";
import * as TokenStorage from "../../../shared/storage/SessionStorage.ts";
import {SessionStorageKey} from "../../../shared/storage/SessionStorage.ts";

export async function ValidateService(): Promise<boolean> {
  try {
    const response = await fetch(`${envConfig.API_BACKEND}/auth/validate`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TokenStorage.GetSessionStorageValue(SessionStorageKey.TOKEN_KEY)}`,
      },
    });
    return response.ok;
  } catch (e) {
    console.error(e);
    return false;
  }
}
