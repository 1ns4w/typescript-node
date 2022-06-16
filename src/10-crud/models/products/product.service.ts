import { ProductInterface } from "./product.model";

export let products: ProductInterface[] = []

export const addProduct = (product: ProductInterface): void => { products.push(product) }

export const updateProduct = (productId: string, product: ProductInterface): void => {
  products.forEach((e, i) => { if (e.id == productId) products[i] = product })
}

export const deleteProduct = (productId: string): void => {
  products = products.filter(e => e.id != productId)
}
