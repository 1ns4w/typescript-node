export interface BaseInterface {
  // readonly prevents values from being changed after creation
  readonly id: number,
  readonly createdAt: Date,
  updatedAt?: Date,
}
