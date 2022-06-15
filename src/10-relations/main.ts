import { products, addProduct } from "./models/products/product.service";
import { OrderInterface } from "./models/orders/order.model";
import { RolesEnum } from "./models/users/user.model";

addProduct({
  id: 1,
  name: "Coke",
  description: "Coca Cola",
  price: 1.50,
  stock: 10,
  category: {
    id: 1,
    name: "Soda",
    createdAt: new Date(),
  },
  createdAt: new Date(),
})

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
}

// updating order id doesn't work because it's readonly
//order.id = 2

console.log(order)
