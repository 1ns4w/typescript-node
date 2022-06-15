const sumNumbers = (...args: number[]): number => {
  return args.reduce((sum, current) => sum + current, 0)
}

console.log(sumNumbers(1, 2, 3, 4, 5))
