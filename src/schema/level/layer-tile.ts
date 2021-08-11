import {
  objectSchema, integerTuple2Schema, integerSchema, arrayOfSchema
} from '..'

import { flipBitSchema } from './flip-bit'
import { LayerTileKey } from './key-types'

export const layerTileSchemaProperties = {
  f: flipBitSchema,
  px: integerTuple2Schema,
  src: integerTuple2Schema,
  t: integerSchema
} as const

export const layerTileSchemaRequired = [
  'f',
  'px',
  'src',
  't'
] as const

export const layerTileSchema = {
  ...objectSchema,
  properties: layerTileSchemaProperties,
  required: layerTileSchemaRequired
} as const

export const layerTileArraySchema = arrayOfSchema(layerTileSchema)

export const layerTileKeys = Object.freeze(
  Object.keys(
    layerTileSchemaProperties
  ) as LayerTileKey[]
)
