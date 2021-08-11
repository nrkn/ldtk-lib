import { arrayOfSchema, objectSchema, stringSchema } from '../core'
import { enumDefinitionSchema } from './enum-definition'
import { ExternalEnumDefinitionKey } from './key-types'

export const externalEnumDefinitionSchemaProperties = {
  ...enumDefinitionSchema.properties,
  relPath: stringSchema
} as const

export const externalEnumDefinitionSchemaRequired = (
  ['identifier', 'uid', 'values', 'relPath'] as const
)

export const externalEnumDefinitionSchema = {
  ...objectSchema,
  properties: externalEnumDefinitionSchemaProperties,
  required: externalEnumDefinitionSchemaRequired
} as const

export const externalEnumDefinitionKeys = Object.freeze(
  Object.keys(
    externalEnumDefinitionSchema.properties
  ) as ExternalEnumDefinitionKey[]
)

export const externalEnumDefinitionArraySchema = arrayOfSchema(
  externalEnumDefinitionSchema
)
