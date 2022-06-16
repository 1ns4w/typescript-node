import { ProductInterface } from "./product.model";
import { ProductDTO } from "./product.dto";
import { faker } from "@faker-js/faker";

export let products: ProductDTO[] = []

// product creations is delegated to service, that's what we use dtos for
export const addProduct = (product: ProductDTO): void => {
  products.push({
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department()
    },
    ...product,
  })
}

/*
export const updateProduct = (productId: string, product: ProductDTO): void => {
  products.forEach((e, i) => { if (e.id == productId) products[i] = product })
}

export const deleteProduct = (productId: string): void => {
  products = products.filter(e => e.id != productId)
}
*/
