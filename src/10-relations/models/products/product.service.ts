import { ProductInterface } from "./product.model";

export let products: ProductInterface[] = []

export const addProduct = (product: ProductInterface): void => { products.push(product) }
