import { GetUserDTO } from "../../../../shared/backendTypes/BackendTypes.ts";
import css from "./UpdateAccountFeature.module.css";
import { useState } from "react";
import { UpdateUserService } from "./UpdateUsersService.ts";
interface Props {
  user: GetUserDTO;
  updateUserList: (getUserDTO: GetUserDTO) => void;
}

export function UpdateAccountRow({ user, updateUserList }: Props) {
  const [username, setUsername] = useState<string>(user.username);
  const [invoiceName, setInvoiceName] = useState<string>(user.invoiceName);
  const [disabled, setDisabled] = useState<boolean>(user.disabled);

  const handleClick = async () => {
    const success = await UpdateUserService(
      user.userId,
      username,
      invoiceName,
      disabled,
    );
    if (success) {
      updateUserList({
        userId: user.userId,
        username: username,
        disabled: disabled,
        invoiceName: invoiceName,
        authority: user.authority,
      });
    } else {
      setUsername(user.username);
      setInvoiceName(user.invoiceName);
      setDisabled(user.disabled);
    }
  };

  return (
    <>
      <div className={css.gridRow}>
        <input
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          type="text"
        />
        {username === user.username ? (
          ""
        ) : (
          <button onClick={handleClick} className={css.Button}>
            ✓
          </button>
        )}
      </div>
      <div className={css.gridRow}>
        <input
          className={css.input}
          onChange={(event) => setInvoiceName(event.target.value)}
          value={invoiceName}
          type="text"
        />
        {invoiceName === user.invoiceName ? (
          ""
        ) : (
          <button onClick={handleClick} className={css.Button}>
            ✓
          </button>
        )}
      </div>
      <div className={css.gridRow}>
        <input
          onChange={() => setDisabled(!disabled)}
          checked={disabled}
          type="checkbox"
        />
        {disabled === user.disabled ? (
          ""
        ) : (
          <button onClick={handleClick} className={css.Button}>
            ✓
          </button>
        )}
      </div>
    </>
  );
}
