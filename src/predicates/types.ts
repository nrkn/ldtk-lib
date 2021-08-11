import { LdtkTypeKey, Predicate, LdtkTypeMap } from '../schema'

export type Predicates = {
  [ k in LdtkTypeKey ]: Predicate<LdtkTypeMap[k]>
}