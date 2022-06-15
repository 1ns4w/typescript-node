import { CategoryInterface } from '../categories/category.model';
import { BaseInterface } from '../base.models';

// it's recommended to name interfaces in pascal case and with a suffix of Interface
export interface ProductInterface extends BaseInterface {
  name: string,
  description?: string,
  price: number,
  stock: number,
  category: CategoryInterface
}
