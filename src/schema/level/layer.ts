import { 
  objectSchema, integerSchema, stringSchema, min0Max1Schema, 
  nullableIntegerSchema, nullableStringSchema, integerArraySchema, 
  booleanSchema 
} from '..'
import { arrayOfSchema } from '../core'

import { entityArraySchema } from './entity'
import { LayerKey } from './key-types'
import { layerTileArraySchema } from './layer-tile'
import { layerTypeSchema } from './layer-type'

export const layerSchemaProperties = {
  __cHei: integerSchema,
  __cWid: integerSchema,
  __gridSize: integerSchema,
  __identifier: stringSchema,
  __opacity: min0Max1Schema,
  __pxTotalOffsetX: integerSchema,
  __pxTotalOffsetY: integerSchema,
  __tilesetDefUid: nullableIntegerSchema,
  __tilesetRelPath: nullableStringSchema,
  __type: layerTypeSchema,
  autoLayerTiles: layerTileArraySchema,
  entityInstances: entityArraySchema,
  gridTiles: layerTileArraySchema,
  intGridCsv: integerArraySchema,
  layerDefUid: integerSchema,
  levelId: integerSchema,
  overrideTilesetUid: nullableIntegerSchema,
  pxOffsetX: integerSchema,
  pxOffsetY: integerSchema,
  visible: booleanSchema
} as const

const layerSchemaRequired = [
  '__cHei',
  '__cWid',
  '__gridSize',
  '__identifier',
  '__opacity',
  '__pxTotalOffsetX',
  '__pxTotalOffsetY',
  '__type',
  'autoLayerTiles',
  'entityInstances',
  'gridTiles',
  'intGridCsv',
  'layerDefUid',
  'levelId',
  'pxOffsetX',
  'pxOffsetY',
  'visible',
] as const

export const layerSchema = {
  ...objectSchema,
  properties: layerSchemaProperties,
  required: layerSchemaRequired
} as const

export const layerArraySchema = arrayOfSchema(layerSchema)

export const layerKeys = Object.freeze(
  Object.keys(
    layerSchemaProperties
  ) as LayerKey[]
)
