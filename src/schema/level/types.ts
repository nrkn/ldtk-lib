import { FromSchema } from 'json-schema-to-ts'

import { 
  cardinalDirSchema, entitySchema, entityTileSchema, fieldSchema, flipBitSchema, 
  flipBoth, flipX, flipY, layerSchema, layerTileSchema, layerTypeSchema, 
  levelSchema, neighbourSchema, noFlip, positionSchema 
} from '.'

export type CardinalDir = FromSchema<typeof cardinalDirSchema>

export type EntityTile = FromSchema<typeof entityTileSchema>

export type Entity = FromSchema<typeof entitySchema>

export type Field = FromSchema<typeof fieldSchema>

export type FlipBit = FromSchema<typeof flipBitSchema>

export type NoFlip = typeof noFlip
export type FlipX = typeof flipX
export type FlipY = typeof flipY
export type FlipBoth = typeof flipBoth

export type LayerTile = FromSchema<typeof layerTileSchema>

export type LayerType = FromSchema<typeof layerTypeSchema>

export type Layer = FromSchema<typeof layerSchema>

export type Level = FromSchema<typeof levelSchema>

export type Neighbour = FromSchema<typeof neighbourSchema>

export type Position = FromSchema<typeof positionSchema>

export type LdtkLevelTypeMap = {
  CardinalDir: CardinalDir
  EntityTile: EntityTile
  Entity: Entity
  Field: Field
  FlipBit: FlipBit
  NoFlip: NoFlip
  FlipX: FlipX
  FlipY: FlipY
  FlipBoth: FlipBoth
  LayerTile: LayerTile
  LayerType: LayerType
  Layer: Layer
  Level: Level
  Neighbour: Neighbour
  Position: Position
}
