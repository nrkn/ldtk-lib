import { objectSchema, stringSchema, integerSchema, arrayOfSchema } from '..'
import { FieldKey } from './key-types'

export const fieldSchemaProperties = {
  __identifier: stringSchema,
  __type: stringSchema, // get list of types later
  __value: {} as any,
  defUid: integerSchema
} as const

export const fieldSchemaRequired = [
  '__identifier',
  '__type',
  '__value',
  'defUid'
] as const

export const fieldSchema = {
  ...objectSchema,
  properties: fieldSchemaProperties,
  required: fieldSchemaRequired
} as const

export const fieldArraySchema = arrayOfSchema(fieldSchema)

export const fieldKeys = Object.freeze(
  Object.keys(
    fieldSchemaProperties
  ) as FieldKey[]
)
