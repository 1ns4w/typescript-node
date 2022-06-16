export type IdAlias = number | string;

// you can extend specific data using pick or omit
// extended interfaces omitting or picking data are called dtos
export interface BaseInterface {
  // readonly prevents values from being changed after creation
  readonly id: IdAlias;
  readonly createdAt: Date,
  readonly updatedAt?: Date,
}
