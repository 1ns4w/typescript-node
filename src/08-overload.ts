// typeof doesn't check array types, so we have to use Array.isArray()
const buzz = (input: string | string[]) => {
  return Array.isArray(input) ? input.join('') : input.split('')
}

// we have to use type assertion to make sure we're working with the right type as buzz returns different types
const array = buzz('abc')
Array.isArray(array) && console.log(array.reverse())


const string = buzz(['a', 'b', 'c'])
typeof string === 'string' && console.log(string.toUpperCase())

// to avoid type assertion, we can use function overloading
function parseStr(input: string): string[];
function parseStr(input: string[]): string;

/*
function parseStr(input: string | string[]): string | string[] {
  return Array.isArray(input) ? input.join('') : input.split('')
}
*/

// unknown forces type checking and helps us avoid declaring multiple types
function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('')
  } else if (typeof input === 'string') {
    return input.split('')
  }
}

// you can see you don't need to do type assertion anymore as the function returns either string or string[]
const array2 = parseStr('abc')
console.log(array2.reverse())

const string2 = parseStr(['a', 'b', 'c'])
console.log(string2.toUpperCase())
