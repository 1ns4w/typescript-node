import { ProductInterface } from './../products/product.model';
import { UserInterface } from './../users/user.model';
import { BaseInterface } from '../base.model';

export interface OrderInterface extends BaseInterface {
  user: UserInterface,
  products: ProductInterface[],
}
