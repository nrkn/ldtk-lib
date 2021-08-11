import { objectSchema, nullableIntegerSchema } from '..'
import { arrayOfSchema } from '../core'
import { layerBaseDefinitionSchema } from './layer-base-definition'
import { TilesLayerDefinitionKey } from './key-types'

export const tilesLayerDefinitionSchemaProperties = {
  __type: { type: 'string', const: 'Tiles' },
  ...layerBaseDefinitionSchema.properties,
  tilesetDefUid: nullableIntegerSchema
} as const

export const tilesLayerDefinitionSchemaRequired = [
  '__type', ...layerBaseDefinitionSchema.required, 'tilesetDefUid'
] as const

export const tilesLayerDefinitionSchema = {
  ...objectSchema,
  properties: tilesLayerDefinitionSchemaProperties,
  required: [
    '__type', ...layerBaseDefinitionSchema.required, 'tilesetDefUid'
  ]
} as const

export const tilesLayerDefinitionArraySchema = arrayOfSchema(
  tilesLayerDefinitionSchema
)

export const tilesLayerDefinitionKeys = Object.freeze(
  Object.keys(
    tilesLayerDefinitionSchemaProperties
  ) as TilesLayerDefinitionKey[]
)
