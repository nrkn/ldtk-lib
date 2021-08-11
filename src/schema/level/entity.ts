import {
  objectSchema, integerTuple2Schema, stringSchema, min0Max1Tuple2Schema,
  integerSchema
} from '..'

import { arrayOfSchema } from '../core'
import { nullableEntityTitle } from './entity-tile'
import { fieldArraySchema } from './field'
import { EntityKey } from './key-types'

export const entitySchemaProperties = {
  __grid: integerTuple2Schema,
  __identifier: stringSchema,
  __pivot: min0Max1Tuple2Schema,
  __tile: nullableEntityTitle,
  defUid: integerSchema,
  fieldInstances: fieldArraySchema,
  width: integerSchema,
  height: integerSchema,
  px: integerTuple2Schema,
} as const

export const entitySchemaRequired = [
  '__grid',
  '__identifier',
  '__pivot',
  'defUid',
  'fieldInstances',
  'width',
  'height',
  'px',
] as const

export const entitySchema = {
  ...objectSchema,
  properties: entitySchemaProperties,
  required: entitySchemaRequired
} as const

export const entityArraySchema = arrayOfSchema(entitySchema)

export const entityKeys = Object.freeze(
  Object.keys(
    entitySchemaProperties
  ) as EntityKey[]
)
