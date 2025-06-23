import { HeaderBuilder } from "../../../shared/http/HeaderBuilder.ts";
import { RequestHandler } from "../../../shared/http/RequestHandler.tsx";
import { GetUserDTO } from "../../../shared/backendTypes/BackendTypes.ts";

export async function GetUserService(): Promise<GetUserDTO | null> {
  try {
    const request: Request = HeaderBuilder("/user", "GET");
    return await RequestHandler<GetUserDTO>(request);
  } catch (error) {
    console.error(error);
    return null;
  }
}
