import { ReactNode } from "react";
import { LoadingPage } from "../components/loading/LoadingPage/LoadingPage.tsx";

interface Props {
  accessPage: ReactNode;
  fallbackPage: ReactNode;
  authenticated: boolean | null;
}

export function PrivateRouter({
  accessPage,
  fallbackPage,
  authenticated,
}: Props) {
  if (null == authenticated) return <LoadingPage />;
  if (authenticated) return accessPage;
  return fallbackPage;
}
