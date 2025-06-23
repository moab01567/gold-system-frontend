import css from "./LoginFeature.module.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { LoginService } from "./LoginService.ts";
import { useNavigate } from "react-router-dom";
import * as StaticPageData from "../../../pages/StaticPageData.ts";
import { Loading } from "../../../components/loading/loading/Loading.tsx";

interface Props {
  setAuthenticated: (authenticated: boolean | null) => void;
}
export function LoginFeature({ setAuthenticated }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    if (await LoginService(username, password)) {
      setAuthenticated(null);
      setLoading(false);
      navigate(StaticPageData.staticPageData.storePage.path);
    }
    setLoading(false);
  };

  return (
    <div className={css.loginDiv}>
      <h1>Login تسجيل الدخول</h1>
      <div className={css.usernameAndPasswordDiv}>
        <TextField
          onChange={(event) => setUsername(event.target.value)}
          className={css.usernameAndPasswordInput}
          label={"Username اسم المستخدم"}
          variant="outlined"
        />
        <TextField
          onChange={(event) => setPassword(event.target.value)}
          className={css.usernameAndPasswordInput}
          type="password"
          label={"Password كلمة المرور"}
          variant="outlined"
        />
        {loading ? (
          <Loading />
        ) : (
          <Button
            onClick={handleLogin}
            className={css.usernameAndPasswordInput}
            variant="contained"
          >
            Sign in تسجيل
          </Button>
        )}
      </div>
    </div>
  );
}
