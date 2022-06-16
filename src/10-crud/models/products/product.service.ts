import { ProductInterface } from "./product.model";
import { ProductDTO } from "./product.dto";

export let products: ProductDTO[] = []

export const addProduct = (product: ProductDTO): void => { products.push(product) }

/*
export const updateProduct = (productId: string, product: ProductDTO): void => {
  products.forEach((e, i) => { if (e.id == productId) products[i] = product })
}

export const deleteProduct = (productId: string): void => {
  products = products.filter(e => e.id != productId)
}
*/
