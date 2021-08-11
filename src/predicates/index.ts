import { LdtkTypeKey, LdtkTypeMap } from '../schema'
import { validator } from '../validator'
import { Predicates } from './types'

const createTypeGuard = <K extends LdtkTypeKey>(key: K) =>
  (value: any): value is LdtkTypeMap[K] =>
    validator(key, value).isValid

export const predicates: Predicates = {
  WorldLayout: createTypeGuard('WorldLayout'),
  CardinalDir: createTypeGuard('CardinalDir'),
  LayerType: createTypeGuard('LayerType'),
  Root: createTypeGuard('Root'),
  Level: createTypeGuard('Level'),
  Position: createTypeGuard('Position'),
  Neighbour: createTypeGuard('Neighbour'),
  Field: createTypeGuard('Field'),
  Layer: createTypeGuard('Layer'),
  LayerTile: createTypeGuard('LayerTile'),
  NoFlip: createTypeGuard('NoFlip'),
  FlipX: createTypeGuard('FlipX'),
  FlipY: createTypeGuard('FlipY'),
  FlipBoth: createTypeGuard('FlipBoth'),
  FlipBit: createTypeGuard('FlipBit'),
  Entity: createTypeGuard('Entity'),
  EntityTile: createTypeGuard('EntityTile'),
  EntityDefinition: createTypeGuard('EntityDefinition'),
  EnumValueDefinition: createTypeGuard('EnumValueDefinition'),
  EnumDefinition: createTypeGuard('EnumDefinition'),
  ExternalEnumDefinition: createTypeGuard('ExternalEnumDefinition'),
  IntGridValues: createTypeGuard('IntGridValues'),
  IntGridLayerDefinition: createTypeGuard('IntGridLayerDefinition'),
  AutoLayerDefinition: createTypeGuard('AutoLayerDefinition'),
  TilesLayerDefinition: createTypeGuard('TilesLayerDefinition'),
  EntitiesLayerDefinition: createTypeGuard('EntitiesLayerDefinition'),
  LayerDefinition: createTypeGuard('LayerDefinition'),
  CustomData: createTypeGuard('CustomData'),
  EnumTags: createTypeGuard('EnumTags'),
  TilesetDefinition: createTypeGuard('TilesetDefinition'),
  Definitions: createTypeGuard('Definitions'),
}
