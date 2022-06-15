// Nums are similar to literal types but values are assigned using enum as an object
export enum PHONES {
  IPHONE = 'iPhone Y2',
  SAMSUNG = 'Samsung X',
  XIAOMI = 'Xiaomi 11',
}

const myPhone: PHONES = PHONES.XIAOMI;
console.log(myPhone);
