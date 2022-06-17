import { ProductInterface } from "./product.model";
import { ProductDTO, UpdateProductDTO } from "./product.dto";
import { faker } from "@faker-js/faker";

export let products: ProductInterface[] = []

// product creations is delegated to service, that's what we use dtos for
export const addProduct = (product: ProductDTO): ProductInterface => {
  const newProduct = {
    ...product,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct)
  return newProduct
}

// partial helps us pass only the fields we want to update while required helps us pass all fields
// on this case, we not always want to update all the fields, so partial is used



export const updateProduct = (productId: string, changes: UpdateProductDTO): ProductInterface => {
  const index = products.findIndex(product => product.id === productId)
  products[index] = {
    ...products[index],
    ...changes, // even though ...products[index] returns all fields, we can still update the product setting the properties again
  }
  return products[index]
}

/*
export const deleteProduct = (productId: string): void => {
  products = products.filter(e => e.id != productId)
}
*/
