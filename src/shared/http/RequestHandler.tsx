import { DisplayError, ErrorType } from "../displayMessage/DisplayMessage.tsx";
import { staticPageData } from "../../pages/StaticPageData.ts";

interface Message {
  message: string;
}

async function handleFailedRequest(status: number, message: string) {
  if (status >= 500) {
    DisplayError(
      "Something went wrong. Please contact the developer/حدث خطأ ما. يرجى التواصل مع المطوّر",
      ErrorType.warning,
    );
  } else if (status == 401) {
    DisplayError(message, ErrorType.error);
    if (staticPageData.login.path !== window.location.pathname) {
      window.location.reload();
    }
  } else if (status >= 400) {
    DisplayError(message, ErrorType.error);
  }
}

function handleSuccessRequest() {
  DisplayError("تم بنجاح/success", ErrorType.success);
}

export async function RequestHandler<Type>(
    request: Request,
    successDisplayMessage = true,
    errorDisplayMessage = true,
): Promise<Type> {
  let body: Message | Type;
  const response = await fetch(request);
  if (!response.ok) {
    try{
      body = (await response.json()) as Message;
    }catch (e){
      console.warn(e)
     body = {message:"Something went wrong. Please contact the developer/حدث خطأ ما. يرجى التواصل مع المطوّر "}
    }
    console.warn("Failed to parse error message from server");
    if (errorDisplayMessage){
       handleFailedRequest(response.status, body.message);
    }
    throw new Error(`Request failed with status ${response.status}`);
  }
  if (successDisplayMessage) handleSuccessRequest();
  return (await response.json()) as Type;
}
