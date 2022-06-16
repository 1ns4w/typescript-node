import { ProductInterface } from "./product.model";

export interface ProductDTO extends Omit<ProductInterface, 'id' | 'createdAt' | 'updatedAt' | 'category' > {
  categoryId: string;
}

