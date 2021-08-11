import { arrayOfSchema, objectSchema } from '..'
import { layerBaseDefinitionSchema } from './layer-base-definition'
import { EntitiesLayerDefinitionKey } from './key-types'

export const entitiesLayerDefinitionSchemaProperties = {
  __type: { type: 'string', const: 'Entities' },
  ...layerBaseDefinitionSchema.properties
} as const

export const entitiesLayerDefinitionSchemaRequired =  [
  '__type', ...layerBaseDefinitionSchema.required
] as const

export const entitiesLayerDefinitionSchema = {
  ...objectSchema,
  properties: entitiesLayerDefinitionSchemaProperties,
  required: entitiesLayerDefinitionSchemaRequired
} as const

export const entitiesLayerDefinitionArraySchema = arrayOfSchema(
  entitiesLayerDefinitionSchema
)

export const entitiesLayerDefinitionKeys = Object.freeze(
  Object.keys(
    entitiesLayerDefinitionSchemaProperties
  ) as EntitiesLayerDefinitionKey[]
)
