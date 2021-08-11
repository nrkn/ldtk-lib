import { FromSchema, JSONSchema } from 'json-schema-to-ts'
import { LdtkDefinitionsTypeMap } from './definitions/types'
import { LdtkLevelTypeMap } from './level'
import { rootSchema, worldLayoutSchema } from './root'

export type WorldLayout = FromSchema<typeof worldLayoutSchema>

export type Root = FromSchema<typeof rootSchema>

export type LdtkTypeMap = LdtkDefinitionsTypeMap & LdtkLevelTypeMap & {
  WorldLayout: WorldLayout
  Root: Root
}

export type LdtkTypeKey = keyof LdtkTypeMap & string

export type Predicate<T> = ( value: any ) => value is T

export type SchemaMap = {
  [ k in LdtkTypeKey ]: JSONSchema
}
