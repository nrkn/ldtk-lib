import { objectSchema } from '..'
import { arrayOfSchema } from '../core'
import { autoLayerDefinitionSchema } from './auto-layer-definition'
import { entitiesLayerDefinitionSchema } from './entities-layer-definition'
import { intGridLayerDefinitionSchema } from './int-grid-layer-definition'
import { tilesLayerDefinitionSchema } from './tiles-layer-definition'

export const layerDefinitionSchema = {
  ...objectSchema,
  oneOf: [
    intGridLayerDefinitionSchema,
    autoLayerDefinitionSchema,
    tilesLayerDefinitionSchema,
    entitiesLayerDefinitionSchema
  ]
} as const

export const layerDefinitionArraySchema = arrayOfSchema( layerDefinitionSchema )
