import { ProductInterface } from "./product.model";
import { FindProductDTO, ProductDTO, UpdateProductDTO } from "./product.dto";
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


// we can access an interface type by its index to avoid refactoring types if an attribute type is changed
type ProductInterfaceId = ProductInterface['id']

// if productinterface id data type is changed it will be tracked
const findProductIndex = (productId: ProductInterfaceId): number => {
  return products.findIndex(product => product.id === productId)
}

// partial helps us pass only the fields we want to update while required helps us pass all fields
// on this case, we not always want to update all the fields, so partial is used

export const updateProduct = (productId: ProductInterfaceId, changes: UpdateProductDTO): ProductInterface => {
  const index = findProductIndex(productId)
  products[index].updatedAt = faker.date.recent()
  products[index] = {
    ...products[index],
    ...changes, // even though ...products[index] returns all fields, we can still update the product setting the properties again
  }
  return products[index]
}

export const deleteProduct = (productId: ProductInterfaceId): void => {
  const index = findProductIndex(productId)
  products.splice(index, 1)
}

export const findProduct = (productId: ProductInterfaceId): ProductInterface => {
  const index = findProductIndex(productId)
  return products[index]
}

// (filter: FindProductDTO)
export const findProducts = () : ProductInterface[] => {
  // filter
  // filter.stock = 1
  return products
}
