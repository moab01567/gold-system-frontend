import ReactDOMServer from "react-dom/server";
import css from "./DisplayMessage.module.css";

export enum ErrorType {
  error = "Error",
  info = "Info",
  warning = "Warn",
  success = "Success",
}

function clearDisplayMessage() {
  const div = document.getElementById("MessageId");
  if (div) div.innerHTML = "";
}

export function DisplayError(message: string, type: ErrorType) {
  const div = document.getElementById("MessageId");
  if (div)
    div.innerHTML = ReactDOMServer.renderToString(
      <div className={`${css.MessageDiv} ${css[type]}`}>
        <h3>{message}</h3>
      </div>,
    );
  setTimeout(clearDisplayMessage, 10000);
}

export function DisplayMessage() {
  return (
    <>
      <div className={css.DisplayMessageDiv} id="MessageId"></div>
    </>
  );
}
