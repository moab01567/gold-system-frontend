import { HeaderBuilder } from "../../../../shared/http/HeaderBuilder.ts";
import { RequestHandler } from "../../../../shared/http/RequestHandler.tsx";
import {
  GetUserDTO,
  SuccessMessageDTO,
} from "../../../../shared/backendTypes/BackendTypes.ts";

export async function GetUsersService(
  setUserList: (setUserList: GetUserDTO[]) => void,
) {
  try {
    const request = HeaderBuilder("/user/all", "GET");
    const userList: GetUserDTO[] = await RequestHandler<GetUserDTO[]>(
      request,
      false,
    );
    setUserList(userList);
  } catch (error) {
    console.error(error);
    setUserList([]);
  }
}

export async function UpdateUserService(
  userId: number,
  username: string,
  invoiceName: string,
  disabled: boolean,
) {
  try {
    const request = HeaderBuilder("/user/update", "PUT", {
      userId: userId,
      username: username,
      invoiceName: invoiceName,
      disabled: disabled,
    });
    await RequestHandler<SuccessMessageDTO>(request);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
