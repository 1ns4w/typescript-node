import { ProductInterface } from "./product.model";

export interface ProductDTO extends Omit<ProductInterface, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

export interface UpdateProductDTO extends Partial<ProductDTO> {}

// if we didn't have partial, we would have to create a new interface with all the fields set as optional
// note: if we wanted all the fields we could just use ProductDTO as updateProduct func product data type
/*
export interface updateProductDTO {
  name?: string,
  image?: string,
  description?: string,
  price?: PriceAlias,
  stock?: number,
  category?: CategoryInterface,
  tags?: string[]
}
*/

// we dont wanna omit data such as id or created at so we have to extend the dto interface from product itnerface instead of product dto like update
// readonly disables updating by dot notation - we do dis cuz prod is found aka returned
export interface FindProductDTO extends Readonly<Partial<ProductInterface>> {}
