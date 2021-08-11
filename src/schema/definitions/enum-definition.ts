import {
  arrayOfSchema, integerSchema, nullableIntegerSchema, nullableStringSchema,
  objectSchema, stringSchema
} from '../core'

import { enumValueDefinitionArraySchema } from './enum-value-definition'
import { EnumDefinitionKey } from './key-types'

export const enumDefinitionSchemaProperties = {
  externalRelPath: nullableStringSchema,
  iconTilesetUid: nullableIntegerSchema,
  identifier: stringSchema,
  uid: integerSchema,
  values: enumValueDefinitionArraySchema
} as const

export const enumDefinitionSchemaRequired = (
  ['identifier', 'uid', 'values'] as const
)

export const enumDefinitionSchema = {
  ...objectSchema,
  properties: enumDefinitionSchemaProperties,
  required: enumDefinitionSchemaRequired
} as const

export const enumDefinitionKeys = Object.freeze(
  Object.keys(enumDefinitionSchema.properties) as EnumDefinitionKey[]
)

export const enumDefinitionArraySchema = arrayOfSchema(enumDefinitionSchema)
