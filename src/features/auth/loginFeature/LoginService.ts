import * as TokenStorage from "../../../shared/storage/SessionStorage.ts";
import { HeaderBuilder } from "../../../shared/http/HeaderBuilder.ts";
import { RequestHandler } from "../../../shared/http/RequestHandler.tsx";
import { TokenDTO } from "../../../shared/backendTypes/BackendTypes.ts";
import {SessionStorageKey} from "../../../shared/storage/SessionStorage.ts";

export async function LoginService(
  username: string,
  password: string,
): Promise<boolean> {
  const request: Request = HeaderBuilder("/auth/login", "POST", {
    username,
    password,
  });
  try {
    const responseDTO: TokenDTO = await RequestHandler<TokenDTO>(request);
    TokenStorage.SetSessionStorage(SessionStorageKey.TOKEN_KEY, responseDTO.token);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
