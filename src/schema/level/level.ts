import {
  stringSchema, objectSchema, integerSchema, arrayOfSchema, 
  nullableStringSchema
} from '../core'

import { fieldArraySchema } from './field'
import { LevelKey } from './key-types'
import { layerArraySchema } from './layer'
import { neighbourArraySchema } from './neighbour'
import { nullablePositionSchema } from './position'

export const levelSchemaProperties = {
  __bgColor: nullableStringSchema,
  __bgPos: nullablePositionSchema,
  __neighbours: neighbourArraySchema,
  bgRelPath: nullableStringSchema,
  externalRelPath: nullableStringSchema,
  fieldInstances: fieldArraySchema,
  identifier: stringSchema,
  layerInstances: layerArraySchema,
  pxHei: integerSchema,
  pxWid: integerSchema,
  uid: integerSchema,
  worldX: integerSchema,
  worldY: integerSchema,
} as const

export const levelSchemaRequired = [
  '__neighbours',
  'fieldInstances',
  'identifier',
  'layerInstances',
  'pxHei',
  'pxWid',
  'uid',
  'worldX',
  'worldY'
] as const

export const levelSchema = {
  ...objectSchema,
  properties: levelSchemaProperties,
  required: levelSchemaRequired
} as const

export const levelArraySchema = arrayOfSchema(levelSchema)

export const levelKeys = Object.freeze(
  Object.keys(
    levelSchemaProperties
  ) as LevelKey[]
)
