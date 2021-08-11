import { objectSchema } from '..'
import { arrayOfSchema } from '../core'
import { layerBaseDefinitionSchema } from './layer-base-definition'
import { intGridValuesArraySchema } from './int-grid-values'
import { IntGridLayerDefinitionKey } from './key-types'

export const intGridLayerDefinitionSchemaProperties = {
  __type: { type: 'string', const: 'IntGrid' },
  ...layerBaseDefinitionSchema.properties,
  intGridValues: intGridValuesArraySchema
} as const

export const intGridLayerDefinitionSchemaRequired = [
  '__type', ...layerBaseDefinitionSchema.required, 'intGridValues'
] as const

export const intGridLayerDefinitionSchema = {
  ...objectSchema,
  properties: intGridLayerDefinitionSchemaProperties,
  required: intGridLayerDefinitionSchemaRequired
} as const

export const intGridLayerDefinitionArraySchema = arrayOfSchema(
  intGridLayerDefinitionSchema
)

export const intGridLayerDefinitionKeys = Object.freeze(
  Object.keys(
    intGridLayerDefinitionSchemaProperties
  ) as IntGridLayerDefinitionKey[]
)
