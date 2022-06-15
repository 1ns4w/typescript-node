// Optional parameters must go at the end of parameters
// Ors check if left value is falsy
// Nullish coasceling check if left value is null or undefined

const createProduct = (name: string, price: number, description?: string) => {
  return {
    name,
    price: price ?? 1000000,
    description: description ?? 'hello'
  }
}

const product = createProduct('test', 10)
const product2 = createProduct('test', 0, '')

console.log(product)
console.log(product2)
