import { worldLayouts } from './const'

import { levelArraySchema } from './level'

import { 
  enumSchema, stringSchema, objectSchema, booleanSchema, integerSchema 
} from './core'

import { definitionsSchema } from './definitions'

export const worldLayoutSchema = enumSchema(stringSchema, worldLayouts)

export const rootSchema = {
  ...objectSchema,
  properties: {
    bgColor: stringSchema,
    defs: definitionsSchema,
    externalLevels: booleanSchema,
    jsonVersion: stringSchema,
    levels: levelArraySchema,
    worldGridWidth: integerSchema,
    worldGridHeight: integerSchema,
    worldLayout: worldLayoutSchema,
  },
  required: [
    'bgColor',
    'externalLevels',
    'jsonVersion',
    'levels',
    'worldGridWidth',
    'worldGridHeight',
    'worldLayout'
  ]
} as const
