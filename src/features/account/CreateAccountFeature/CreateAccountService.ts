import { HeaderBuilder } from "../../../shared/http/HeaderBuilder.ts";
import { RequestHandler } from "../../../shared/http/RequestHandler.tsx";

import { SuccessMessageDTO } from "../../../shared/backendTypes/BackendTypes.ts";

export async function CreateAccountService(
  username: string,
  invoiceName: string,
  password: string,
  confirmPassword: string,
): Promise<boolean> {
  const request = HeaderBuilder("/user/create", "POST", {
    username: username,
    invoiceName: invoiceName,
    password: password,
    confirmPassword: confirmPassword,
  });
  try {
    await RequestHandler<SuccessMessageDTO>(request);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
