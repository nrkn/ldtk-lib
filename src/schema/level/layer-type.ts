import { enumSchema, stringSchema, layerTypes } from '..'

export const layerTypeSchema = enumSchema(stringSchema, layerTypes)
