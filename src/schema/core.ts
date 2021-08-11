export const numberSchema = {
  type: 'number'
} as const

export const integerSchema = {
  type: 'integer'
} as const

export const stringSchema = {
  type: 'string'
} as const

export const nullSchema = {
  type: 'null'
} as const

export const booleanSchema = {
  type: 'boolean'
} as const

export const objectSchema = {
  type: 'object'
} as const

export const arraySchema = {
  type: 'array'
} as const

export const min0Max1Schema = {
  ...numberSchema,
  minimum: 0,
  maximum: 1
} as const

export const nullableSchema = <T>(schema: T) => Object.freeze({
  oneOf: [nullSchema, schema] as [typeof nullSchema, T]
})

export const arrayOfSchema = <T>(schema: T) => Object.freeze({
  ...arraySchema,
  items: schema
})

export const enumSchema = <S, T>(schema: S, values: T) => Object.freeze({
  ...schema,
  enum: values
})

export const tuple2SchemaItems = <S>( schema: S ) => Object.freeze(
  [ schema, schema ] 
) as Readonly<[ S, S ]>

export const tuple4SchemaItems = <S>( schema: S ) => Object.freeze(
  [ schema, schema, schema, schema ] 
) as Readonly<[ S, S, S, S ]>

export const tuple2Schema = <S>( schema: S ) => Object.freeze({
  ...arraySchema,
  items: tuple2SchemaItems( schema ),
  minItems: 2,
  maxItems: 2,
  additionalItems: false
})

export const tuple4Schema = <S>( schema: S ) => Object.freeze({
  ...arraySchema,
  items: tuple4SchemaItems( schema ),
  minItems: 4,
  maxItems: 4,
  additionalItems: false
})

export const numberTuple2Schema = {
  ...arraySchema,
  items: tuple2SchemaItems( numberSchema ),
  minItems: 2,
  maxItems: 2,
  additionalItems: false
} as const

export const numberTuple4Schema = {
  ...arraySchema,
  items: tuple4SchemaItems( numberSchema ),
  minItems: 4,
  maxItems: 4,
  additionalItems: false
} as const

export const integerTuple2Schema = {
  ...arraySchema,
  items: tuple2SchemaItems( integerSchema ),
  minItems: 2,
  maxItems: 2,
  additionalItems: false
} as const

export const integerTuple4Schema = {
  ...arraySchema,
  items: tuple4SchemaItems( integerSchema ),
  minItems: 4,
  maxItems: 4,
  additionalItems: false
} as const

export const min0Max1Tuple2Schema = {
  ...arraySchema,
  items: tuple2SchemaItems( min0Max1Schema ),
  minItems: 2,
  maxItems: 2,
  additionalItems: false
} as const

export const min0Max1Tuple4Schema = {
  ...arraySchema,
  items: tuple4SchemaItems( min0Max1Schema ),
  minItems: 4,
  maxItems: 4,
  additionalItems: false  
} as const

export const nullableStringSchema = nullableSchema(stringSchema)

export const nullableNumberSchema = nullableSchema(numberSchema)

export const nullableIntegerSchema = nullableSchema(integerSchema)

export const numberArraySchema = arrayOfSchema(numberSchema)

export const integerArraySchema = arrayOfSchema(integerSchema)
