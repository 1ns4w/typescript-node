import { products, addProduct } from "./models/products/product.service";
import { OrderInterface } from "./models/orders/order.model";
import { RolesEnum } from "./models/users/user.model";
import { faker } from '@faker-js/faker';

for (let i = 0; i < 10; i++) {
  addProduct({
    name: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    tags: faker.helpers.arrayElements(),
    categoryId: faker.datatype.uuid()
  })
}

console.log(products)

/*
let order: OrderInterface = {
  id: 1,
  user: {
    id: 1,
    username: "johndoe",
    role: RolesEnum.Admin,
    createdAt: new Date(),
  },
  products,
  createdAt: new Date(),
}*/

// updating order id doesn't work because it's readonly
//order.id = 2

//console.log(order)
