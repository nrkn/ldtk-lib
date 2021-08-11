import { enumSchema, stringSchema, cardinalDirs } from '..'

export const cardinalDirSchema = enumSchema(stringSchema, cardinalDirs)
