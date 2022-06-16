import { BaseInterface, IdAlias } from "../base.model"

export interface CategoryInterface extends BaseInterface {
  id: IdAlias,
  name: string
}
