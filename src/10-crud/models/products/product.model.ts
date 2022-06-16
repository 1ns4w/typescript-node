import { CategoryInterface } from '../categories/category.model';
import { BaseInterface } from '../base.model';

type PriceAlias = number | string;

// it's recommended to name interfaces in pascal case and with a suffix of Interface
export interface ProductInterface extends BaseInterface {
  name: string,
  image: string,
  description?: string,
  price: PriceAlias,
  stock: number,
  category: CategoryInterface,
  tags: string[]
}


