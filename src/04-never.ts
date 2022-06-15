// never indicates that something could be interrupted (except for return) or never ends
const foo = () => {
  while (true) {
    console.log('hello world')
  }
}

const bar = (age: number) => {
  if (age >= 18) {
    return 'adult'
  }
  throw new Error('under age')
}

console.log(bar(18))
foo()
