import {
  objectSchema, numberTuple4Schema, numberTuple2Schema, integerTuple2Schema,
  nullableSchema
} from '..'
import { PositionKey } from './key-types'

export const positionSchemaProperties = {
  cropRect: numberTuple4Schema,
  scale: numberTuple2Schema,
  topLeftPx: integerTuple2Schema
} as const

export const positionSchemaRequired = [
  'cropRect',
  'scale',
  'topLeftPx'
] as const

export const positionSchema = {
  ...objectSchema,
  properties: positionSchemaProperties,
  required: positionSchemaRequired
} as const

export const nullablePositionSchema = nullableSchema(positionSchema)

export const positionKeys = Object.freeze(
  Object.keys(
    positionSchemaProperties
  ) as PositionKey[]
)
