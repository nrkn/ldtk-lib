import { 
  arrayOfSchema, integerSchema, integerTuple4Schema, nullableIntegerSchema, 
  nullableSchema, objectSchema, stringSchema 
} from '../core'

import { EnumValueDefinitionKey } from './key-types'

export const enumValueDefinitionSchemaProperties = {
  __tileSrcRect: nullableSchema(integerTuple4Schema),
  color: integerSchema,
  id: stringSchema,
  tileId: nullableIntegerSchema
} as const

export const enumValueDefinitionSchemaRequired = ['color', 'id'] as const

export const enumValueDefinitionSchema = {
  ...objectSchema,
  properties: enumValueDefinitionSchemaProperties,
  required: ['color', 'id']
} as const

export const enumValueDefinitionKeys = Object.freeze(
  Object.keys(enumValueDefinitionSchema.properties) as EnumValueDefinitionKey[]
)

export const enumValueDefinitionArraySchema = arrayOfSchema(
  enumValueDefinitionSchema
)
