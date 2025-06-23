import css from "./ChangePasswordFeature.module.css";
import { useState } from "react";

import { Loading } from "../../../components/loading/loading/Loading.tsx";
import { ChangePasswordService } from "./ChangePasswordService.ts";

export function ChangePasswordFeature() {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

  const handleClick = async () => {
    setLoading(true);
    const success = await ChangePasswordService(
      currentPassword,
      newPassword,
      confirmNewPassword,
    );
    console.log(success);
    if (success) {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    }
    setLoading(false);
  };

  return (
    <>
      <div className={css.mainDiv}>
        <h2 className={css.h}>
          <span>
            <span>Change Password</span> <span>تغيير كلمة المرور</span>
          </span>
        </h2>
        <h4 className={css.h}>
          <span>The password must be at least 10 characters</span>
          <span> كلمة المرور يجب أن تتكون من 10 أحرف على الأقل</span>
        </h4>
        <div className={css.divInputAndTitle}>
          <h4 className={css.Title}>
            <span>Current password</span> <span>المرور الحالية</span>
          </h4>
          <input
            value={currentPassword}
            className={css.Input}
            type="password"
            onChange={(event) => setCurrentPassword(event.target.value)}
          />
        </div>
        <div className={css.divInputAndTitle}>
          <h4 className={css.Title}>
            <span>New password</span> <span>المرور الجديدة</span>
          </h4>
          <input
            value={newPassword}
            className={css.Input}
            type="password"
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </div>
        <div className={css.divInputAndTitle}>
          <h4 className={css.Title}>
            <span>Confirm new password</span> <span>تأكيد المرور الجديدة</span>
          </h4>
          <input
            value={confirmNewPassword}
            className={css.Input}
            type="password"
            onChange={(event) => setConfirmNewPassword(event.target.value)}
          />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <button onClick={handleClick} className={css.Button}>
            <span>Change Password</span> <span>تغيير كلمة المرور</span>
          </button>
        )}
      </div>
    </>
  );
}
