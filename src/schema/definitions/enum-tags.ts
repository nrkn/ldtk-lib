import { 
  objectSchema, stringSchema, integerArraySchema, arrayOfSchema 
} from '..'
import { EnumTagsKey } from './key-types'

export const enumTagsSchemaProperties = {
  enumValueId: stringSchema,
  tileIds: integerArraySchema
} as const

export const enumTagsSchemaRequired =  [
  'enumValueId',
  'tileIds'
] as const

export const enumTagsSchema = {
  ...objectSchema,
  properties: enumTagsSchemaProperties,
  required: enumTagsSchemaRequired
} as const

export const enumTagsArraySchema = arrayOfSchema( enumTagsSchema )

export const enumTagsKeys = Object.freeze(
  Object.keys(enumTagsSchemaProperties) as EnumTagsKey[]
)
