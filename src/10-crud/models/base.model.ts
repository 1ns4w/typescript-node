// you can extend specific data using pick or omit
// extended interfaces omitting or picking data are called dtos
// dtos can be used both with type aliases and interfaces but it's recommended to use interfaces
export interface BaseInterface {
  // readonly prevents values from being changed after creation - it is used for attributes
  readonly id: string;
  readonly createdAt: Date,
  updatedAt: Date,
}
