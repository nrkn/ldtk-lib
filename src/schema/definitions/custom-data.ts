import { objectSchema, stringSchema, integerSchema, arrayOfSchema } from '..'
import { CustomDataKey } from './key-types'

export const customDataSchemaProperties = {
  data: stringSchema,
  tileId: integerSchema
} as const

export const customDataSchemaRequired = [
  'data',
  'tileId'
] as const

export const customDataSchema = {
  ...objectSchema,
  properties: customDataSchemaProperties,
  required: customDataSchemaRequired
} as const

export const customDataArraySchema = arrayOfSchema(customDataSchema)

export const customDataKeys = Object.freeze(
  Object.keys(customDataSchemaProperties) as CustomDataKey[]
)
