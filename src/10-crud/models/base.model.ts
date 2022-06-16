export type IdAlias = number | string;

// dtos are used to define mapped data between models and use it for extending models
// you can extend specific data using pick or omit
export interface BaseInterface {
  // readonly prevents values from being changed after creation
  readonly id: IdAlias;
  readonly createdAt: Date,
  updatedAt?: Date,
}
