export enum Authority {
  user = "user",
  admin = "admin",
}

export interface GetUserDTO {
  userId: number;
  username: string;
  invoiceName: string;
  authority: Authority;
  disabled: boolean;
}

export interface TokenDTO {
  token: string;
}
export interface GetStoreDTO {
  storeId:number;
  goldInMg:number;
}
export interface SuccessMessageDTO {
  status: number;
  message: string;
}
