import { 
  arrayOfSchema, integerSchema, min0Max1Schema, nullableIntegerSchema, 
  objectSchema, stringSchema 
} from '../core'

import { EntityDefinitionKey } from './key-types'

export const entityDefinitionSchemaProperties = {
  color: stringSchema,
  height: integerSchema,
  identifier: stringSchema,
  pivotX: min0Max1Schema,
  pivotY: min0Max1Schema,
  tileId: nullableIntegerSchema,
  tilesetId: nullableIntegerSchema,
  uid: integerSchema,
  width: integerSchema
} as const

export const entityDefinitionSchemaRequired = [
  'color',
  'height',
  'identifier',
  'pivotX',
  'pivotY',
  'uid',
  'width'
] as const

export const entityDefinitionSchema = {
  ...objectSchema,
  properties: entityDefinitionSchemaProperties,
  required: entityDefinitionSchemaRequired
} as const

export const entityDefinitionKeys = Object.freeze(
  Object.keys(entityDefinitionSchema.properties) as EntityDefinitionKey[]
)

export const entityDefinitionArraySchema = arrayOfSchema(
  entityDefinitionSchema
)
