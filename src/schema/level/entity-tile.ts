import { 
  objectSchema, integerTuple4Schema, integerSchema, nullableSchema 
} from '..'

import { EntityTileKey } from './key-types'

export const entityTileSchemaProperties = {
  srcRect: integerTuple4Schema,
  tilesetUid: integerSchema
} as const

export const entityTileSchemaRequired = [
  'srcRect',
  'tilesetUid'
] as const

export const entityTileSchema = {
  ...objectSchema,
  properties: entityTileSchemaProperties,
  required: entityTileSchemaRequired
} as const

export const nullableEntityTitle = nullableSchema(entityTileSchema)

export const entityTileKeys = Object.freeze(
  Object.keys(
    entityTileSchemaProperties
  ) as EntityTileKey[]
)
