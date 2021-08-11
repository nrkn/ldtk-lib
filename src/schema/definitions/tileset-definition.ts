import { 
  objectSchema, integerSchema, stringSchema, nullableIntegerSchema, 
  arrayOfSchema 
} from '..'

import { customDataArraySchema } from './custom-data'
import { enumTagsArraySchema } from './enum-tags'
import { TilesetDefinitionKey } from './key-types'

export const tilesetDefinitionSchemaProperties = {
  __cHei: integerSchema,
  __cWid: integerSchema,
  customData: customDataArraySchema,
  enumTags: enumTagsArraySchema,
  identifier: stringSchema,
  padding: integerSchema,
  pxHei: integerSchema,
  pxWid: integerSchema,
  relPath: stringSchema,
  spacing: integerSchema,
  tagsSourceEnumUid: nullableIntegerSchema,
  tileGridSize: integerSchema,
  uid: integerSchema
} as const

export const tilesetDefinitionSchemaRequired = [
  '__cHei',
  '__cWid',
  'customData',
  'enumTags',
  'identifier',
  'padding',
  'pxHei',
  'pxWid',
  'relPath',
  'spacing',
  'tileGridSize',
  'uid'
] as const

export const tilesetDefinitionSchema = {
  ...objectSchema,
  properties: tilesetDefinitionSchemaProperties,
  required: tilesetDefinitionSchemaRequired
} as const

export const tilesetDefinitionArraySchema = arrayOfSchema( 
  tilesetDefinitionSchema 
)

export const tilesetDefinitionKeys = Object.freeze(
  Object.keys(
    tilesetDefinitionSchemaProperties
  ) as TilesetDefinitionKey[]
)
