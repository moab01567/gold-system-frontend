export interface PageData {
  path: string;
  public: boolean;
}

interface StaticPageData {
  login: PageData;
  home: PageData;
  createInvoice: PageData;
  searchInvoice: PageData;
  logout: PageData;
  account: PageData;
  storePage:PageData
}

export const staticPageData: StaticPageData = {
  login: { path: "/login", public: true },
  home: { path: "/home", public: false },
  logout: { path: "/logout", public: true },
  storePage: { path: "/store", public: false },
  createInvoice: { path: "/createInvoice", public: false },
  searchInvoice: { path: "/searchInvoice", public: false },
  account: { path: "/account", public: false },
};
