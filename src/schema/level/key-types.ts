import { entitySchemaProperties } from './entity'
import { entityTileSchemaProperties } from './entity-tile'
import { fieldSchemaProperties } from './field'
import { layerSchemaProperties } from './layer'
import { layerTileSchemaProperties } from './layer-tile'
import { levelSchemaProperties } from './level'
import { neighbourSchemaProperties } from './neighbour'
import { positionSchemaProperties } from './position'

export type EntityTileSchemaProperties = (
  typeof entityTileSchemaProperties
)

export type EntityTileKey = (
  keyof EntityTileSchemaProperties
)


export type FieldSchemaProperties = (
  typeof fieldSchemaProperties
)

export type FieldKey = (
  keyof FieldSchemaProperties
)


export type EntitySchemaProperties = (
  typeof entitySchemaProperties
)

export type EntityKey = (
  keyof EntitySchemaProperties
)


export type LayerTileSchemaProperties = (
  typeof layerTileSchemaProperties
)

export type LayerTileKey = (
  keyof LayerTileSchemaProperties
)


export type LayerSchemaProperties = (
  typeof layerSchemaProperties
)

export type LayerKey = (
  keyof LayerSchemaProperties
)


export type PositionSchemaProperties = (
  typeof positionSchemaProperties
)

export type PositionKey = (
  keyof PositionSchemaProperties
)


export type NeighbourSchemaProperties = (
  typeof neighbourSchemaProperties
)

export type NeighbourKey = (
  keyof NeighbourSchemaProperties
)


export type LevelSchemaProperties = (
  typeof levelSchemaProperties
)

export type LevelKey = (
  keyof LevelSchemaProperties
)
