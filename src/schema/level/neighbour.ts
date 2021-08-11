import { objectSchema, integerSchema, arrayOfSchema } from '..'
import { cardinalDirSchema } from './cardinal-dir'
import { NeighbourKey } from './key-types'

export const neighbourSchemaProperties = {
  dir: cardinalDirSchema,
  levelUid: integerSchema
} as const

export const neighbourSchemaRequired = [
  'dir',
  'levelUid'
] as const

export const neighbourSchema = {
  ...objectSchema,
  properties: neighbourSchemaProperties,
  required: neighbourSchemaRequired
} as const

export const neighbourArraySchema = arrayOfSchema(neighbourSchema)

export const neighbourKeys = Object.freeze(
  Object.keys(
    neighbourSchemaProperties
  ) as NeighbourKey[]
)
