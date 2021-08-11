import { objectSchema, nullableIntegerSchema } from '..'
import { arrayOfSchema } from '../core'
import { layerBaseDefinitionSchema } from './layer-base-definition'
import { AutoLayerDefinitionKey } from './key-types'

export const autoLayerDefinitionSchemaProperties = {
  __type: { type: 'string', const: 'AutoLayer' },
  ...layerBaseDefinitionSchema.properties,
  autoSourceLayerDefUid: nullableIntegerSchema,
  autoTilesetDefUid: nullableIntegerSchema
} as const

export const autoLayerDefinitionSchemaRequired = [
  '__type', ...layerBaseDefinitionSchema.required
] as const

export const autoLayerDefinitionSchema = {
  ...objectSchema,
  properties: autoLayerDefinitionSchemaProperties,
  required: autoLayerDefinitionSchemaRequired
} as const

export const autoLayerDefinitionArraySchema = arrayOfSchema(
  autoLayerDefinitionSchema
)

export const autoLayerDefinitionKeys = Object.freeze(
  Object.keys(
    autoLayerDefinitionSchemaProperties
  ) as AutoLayerDefinitionKey[]
)
