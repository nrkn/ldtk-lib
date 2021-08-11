import { 
  objectSchema, stringSchema, nullableStringSchema, integerSchema, arrayOfSchema 
} from '..'

import { IntGridValuesKey } from './key-types'

export const intGridValuesSchemaProperties = {
  color: stringSchema,
  identifier: nullableStringSchema,
  value: integerSchema
} as const

export const intGridValuesSchemaRequired = ['color', 'value'] as const

export const intGridValuesSchema = {
  ...objectSchema,
  properties: intGridValuesSchemaProperties,
  required: intGridValuesSchemaRequired
} as const

export const intGridValuesKeys = Object.freeze(
  Object.keys(intGridValuesSchemaProperties) as IntGridValuesKey[]
)

export const intGridValuesArraySchema = arrayOfSchema(
  intGridValuesSchema
)
