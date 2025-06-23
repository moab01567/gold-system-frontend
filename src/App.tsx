import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateInvoicePage } from "./pages/createInvoicePage/CreateInvoicePage.tsx";
import { LoginPage } from "./pages/loginPage/LoginPage.tsx";
import { PrivateRouter } from "./pages/PrivateRouter.tsx";
import { staticPageData } from "./pages/StaticPageData.ts";
import { DisplayMessage } from "./shared/displayMessage/DisplayMessage.tsx";
import { useEffect, useState } from "react";
import { ValidateService } from "./features/auth/validateToken/ValidateService.ts";
import { LogoutPage } from "./pages/logoutPage/LogoutPage.tsx";
import { SearchInvoicePage } from "./pages/searchInvoicePage/SearchInvoicePage.tsx";
import { AccountPage } from "./pages/accountPage/AccountPage.tsx";
import { LoadingPage } from "./components/loading/LoadingPage/LoadingPage.tsx";
import { GetUserDTO } from "./shared/backendTypes/BackendTypes.ts";
import { GetUserService } from "./features/auth/getUser/GetUserService.ts";
import {StorePage} from "./pages/storePage/StorePage.tsx";

function App() {
  const [redirectLoading, setRedirectLoading] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<GetUserDTO | null>(null);
  const handleValidate = async () => {
    const isAuthenticated = await ValidateService();

    if (!isAuthenticated) {
      setAuthenticated(false);
      setUser(null);
      return;
    }
    setRedirectLoading(true);
    const user = await GetUserService();
    if (user == null) {
      setAuthenticated(false);
      setUser(null);
      setRedirectLoading(false);
      return;
    }
    setAuthenticated(isAuthenticated);
    setUser(user);
    setRedirectLoading(false);
  };

  useEffect(() => {
    if (authenticated == null) {
      handleValidate();
    }
  }, [authenticated]);

  if (redirectLoading) return <LoadingPage />;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={staticPageData.login.path}
            element={
              <PrivateRouter
                authenticated={authenticated}
                accessPage={
                  <CreateInvoicePage
                    user={user}
                  />
                }
                fallbackPage={
                  <LoginPage
                    setAuthenticated={setAuthenticated}
                  />
                }
              />
            }
          />
          <Route
            path={staticPageData.createInvoice.path}
            element={
              <PrivateRouter
                authenticated={authenticated}
                accessPage={
                  <CreateInvoicePage
                    user={user}
                  />
                }
                fallbackPage={
                  <LoginPage
                    setAuthenticated={setAuthenticated}
                  />
                }
              />
            }
          />
          <Route
            path={staticPageData.searchInvoice.path}
            element={
              <PrivateRouter
                authenticated={authenticated}
                accessPage={
                  <SearchInvoicePage />
                }
                fallbackPage={
                  <LoginPage
                    setAuthenticated={setAuthenticated}
                  />
                }
              />
            }
          />
          <Route
            path={staticPageData.account.path}
            element={
              <PrivateRouter
                authenticated={authenticated}
                accessPage={
                  <AccountPage user={user} />
                }
                fallbackPage={
                  <LoginPage
                    setAuthenticated={setAuthenticated}
                  />
                }
              />
            }
          />
            <Route
                path={staticPageData.storePage.path}
                element={
                    <PrivateRouter
                        authenticated={authenticated}
                        accessPage={
                            <StorePage />
                        }
                        fallbackPage={
                            <LoginPage
                                setAuthenticated={setAuthenticated}
                            />
                        }
                    />
                }
            />
          <Route
            path={staticPageData.logout.path}
            element={
              <LogoutPage
                setAuthenticated={setAuthenticated}
              />
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRouter
                authenticated={authenticated}
                accessPage={
                  <CreateInvoicePage
                    user={user}
                  />
                }
                fallbackPage={
                  <LoginPage
                    setAuthenticated={setAuthenticated}
                  />
                }
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <DisplayMessage></DisplayMessage>
    </>
  );
}

export default App;
