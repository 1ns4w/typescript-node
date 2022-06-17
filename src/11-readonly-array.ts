// const disables reassigning but not mutating
const numbers: number[] = [1, 2, 3]
numbers = [4, 5, 6]
numbers.push(5)

// readonly helps us disable mutating
const vocals: ReadonlyArray<string> = ['a', 'e', 'i']
vocals.push('e')
