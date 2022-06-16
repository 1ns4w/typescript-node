import { BaseInterface } from "../base.model";

// literal types could also be used here but enums are more explicit
export enum RolesEnum {
  Admin = 'Admin',
  Seller = 'Seller',
  Customer = 'Customer',
}

export interface UserInterface extends BaseInterface {
  username: string,
  role: RolesEnum,
}
