import css from "./CreateAccountFeature.module.css";
import { useState } from "react";
import { Loading } from "../../../components/loading/loading/Loading.tsx";
import { CreateAccountService } from "./CreateAccountService.ts";
import { UpdateAccountFeature } from "./updateAccountFeature/UpdateAccountFeature.tsx";

export function CreateAccountFeature() {
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [invoiceName, setInvoiceName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [update, setUpdate] = useState<boolean>(false)
  const handleClick = async () => {
    setLoading(true);
    const success = await CreateAccountService(
      username,
      invoiceName,
      password,
      confirmPassword,
    );
    if (success) {
      setUsername("");
      setInvoiceName("");
      setPassword("");
      setConfirmPassword("");
      setUpdate(!update)
    }
    setLoading(false);

  };

  return (
    <>
      <div className={css.mainDiv}>
        <h2 className={css.h}>Create account إنشاء حساب</h2>
        <h4 className={css.h}>
          <span>The password must be at least 10 characters</span>
          <span> كلمة المرور يجب أن تتكون من 10 أحرف على الأقل</span>
        </h4>
        <div className={css.divInputAndTitle}>
          <h4 className={css.Title}>
            <span>Username</span> <span>اسم المستخدم</span>
          </h4>
          <input
            value={username}
            className={css.Input}
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={css.divInputAndTitle}>
          <h4 className={css.Title}>
            <span>Salesperson name on invoice</span>{" "}
            <span>اسم البائع على الفاتورة</span>
          </h4>
          <input
            value={invoiceName}
            className={css.Input}
            type="text"
            onChange={(event) => setInvoiceName(event.target.value)}
          />
        </div>
        <div className={css.divInputAndTitle}>
          <h4 className={css.Title}>
            <span>New password</span> <span>المرور الجديدة</span>
          </h4>
          <input
            value={password}
            className={css.Input}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className={css.divInputAndTitle}>
          <h4 className={css.Title}>
            <span>Confirm new password</span> <span>تأكيد المرور الجديدة</span>
          </h4>
          <input
            value={confirmPassword}
            className={css.Input}
            type="password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <button onClick={handleClick} className={css.Button}>
            Create account إنشاء حساب
          </button>
        )}
        <UpdateAccountFeature update={update} />
      </div>
    </>
  );
}
