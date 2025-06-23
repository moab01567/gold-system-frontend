
export enum SessionStorageKey {
  TOKEN_KEY = "RizamoToken",
  INVOICE_ID_KEY ="InvoiceId"
}

export function SetSessionStorage(key:SessionStorageKey, value: string) {
  sessionStorage.setItem(key, value);
}
export function GetSessionStorageValue(key: SessionStorageKey): string | null {
  return sessionStorage.getItem(key);
}

export function RemoveKeySessionStorage(key:SessionStorageKey){
  sessionStorage.removeItem(key)
}