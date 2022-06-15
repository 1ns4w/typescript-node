// commonly used for creating custom types for objects
// we can achieve this behavior with type aliases but interfaces are more flexible due to interface inheritance
// it is recommended to use types aliases along with interfaces instead of mixing type alaises with more aliases

type Sizes = 'Big' | 'Medium' | 'Small'

type Soda = {
  id: number,
  name: string,
  description?: string,
  price: number,
  stock: number,
  size: Sizes // this is what we mean by mixing aliases with more aliases, it's confusing af
}

interface SodaInterface {
  id: number,
  name: string,
  description?: string,
  price: number,
  stock: number,
  size: Sizes
}
