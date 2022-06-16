export type IdAlias = number | string;

export interface BaseInterface {
  // readonly prevents values from being changed after creation
  readonly id: IdAlias;
  readonly createdAt: Date,
  updatedAt?: Date,
}
