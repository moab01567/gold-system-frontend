import { HeaderBuilder } from "../../../shared/http/HeaderBuilder.ts";
import { RequestHandler } from "../../../shared/http/RequestHandler.tsx";

import { SuccessMessageDTO } from "../../../shared/backendTypes/BackendTypes.ts";

export async function ChangePasswordService(
  currentPassword: string,
  newPassword: string,
  confirmNewPassword: string,
): Promise<boolean> {
  const request: Request = HeaderBuilder("/user/change/password", "PUT", {
    currentPassword: currentPassword,
    newPassword: newPassword,
    confirmNewPassword: confirmNewPassword,
  });
  try {
    await RequestHandler<SuccessMessageDTO>(request);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
