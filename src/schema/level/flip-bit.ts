import { enumSchema, integerSchema } from '..'
import { flipBits, noFlip, flipX, flipY, flipBoth } from './const'

export const flipBitSchema = enumSchema(integerSchema, flipBits)

export const noFlipSchema = {
  type: 'integer',
  const: noFlip
} as const

export const flipXSchema = {
  type: 'integer',
  const: flipX
} as const

export const flipYSchema = {
  type: 'integer',
  const: flipY
} as const

export const flipBothSchema = {
  type: 'integer',
  const: flipBoth
} as const