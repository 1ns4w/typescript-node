import { products, addProduct } from "./models/products/product.service";
import { OrderInterface } from "./models/orders/order.model";
import { RolesEnum } from "./models/users/user.model";
import { faker } from '@faker-js/faker';

for (let i = 0; i < 10; i++) {
  addProduct({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    createdAt: faker.date.recent(),
    tags: faker.helpers.arrayElements(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
    }
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
