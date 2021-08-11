import { objectSchema, min0Max1Schema, integerSchema, stringSchema } from '..'

export const layerBaseDefinitionSchema = {
  ...objectSchema,
  properties: {
    displayOpacity: min0Max1Schema,
    gridSize: integerSchema,
    identifier: stringSchema,
    pxOffsetX: integerSchema,
    pxOffsetY: integerSchema,
    uid: integerSchema
  },
  required: [
    'displayOpacity',
    'gridSize',
    'identifier',
    'pxOffsetX',
    'pxOffsetY',
    'uid'
  ]
} as const
