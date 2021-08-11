import { 
  customDataSchema, definitionsSchema, 
  enumTagsSchema, layerDefinitionSchema, 
  tilesetDefinitionSchema 
} from './definitions'

import { autoLayerDefinitionSchema } from './definitions/auto-layer-definition'

import { 
  entitiesLayerDefinitionSchema 
} from './definitions/entities-layer-definition'

import { entityDefinitionSchema } from './definitions/entity-definition'
import { enumDefinitionSchema } from './definitions/enum-definition'
import { enumValueDefinitionSchema } from './definitions/enum-value-definition'

import { 
  externalEnumDefinitionSchema 
} from './definitions/external-enum-definition'

import { 
  intGridLayerDefinitionSchema 
} from './definitions/int-grid-layer-definition'

import { intGridValuesSchema } from './definitions/int-grid-values'

import { 
  tilesLayerDefinitionSchema 
} from './definitions/tiles-layer-definition'

import { 
  cardinalDirSchema, entitySchema, entityTileSchema, fieldSchema, flipBitSchema, 
  flipBothSchema, flipXSchema, flipYSchema, layerSchema, layerTileSchema, 
  layerTypeSchema, levelSchema, neighbourSchema, noFlipSchema, positionSchema 
} from './level'

import { rootSchema, worldLayoutSchema } from './root'
import { LdtkTypeKey, SchemaMap } from './types'

export const schemaMap: SchemaMap = {
  WorldLayout: worldLayoutSchema,
  CardinalDir: cardinalDirSchema,
  LayerType: layerTypeSchema,
  Root: rootSchema,
  Level: levelSchema,
  Position: positionSchema,
  Neighbour: neighbourSchema,
  Field: fieldSchema,
  Layer: layerSchema,
  LayerTile: layerTileSchema,
  NoFlip: noFlipSchema,
  FlipX: flipXSchema,
  FlipY: flipYSchema,
  FlipBoth: flipBothSchema,
  FlipBit: flipBitSchema,
  Entity: entitySchema,
  EntityTile: entityTileSchema,
  EntityDefinition: entityDefinitionSchema,
  EnumValueDefinition: enumValueDefinitionSchema,
  EnumDefinition: enumDefinitionSchema,
  ExternalEnumDefinition: externalEnumDefinitionSchema,
  IntGridValues: intGridValuesSchema,
  IntGridLayerDefinition: intGridLayerDefinitionSchema,
  AutoLayerDefinition: autoLayerDefinitionSchema,
  TilesLayerDefinition: tilesLayerDefinitionSchema,
  EntitiesLayerDefinition: entitiesLayerDefinitionSchema,
  LayerDefinition: layerDefinitionSchema,
  CustomData: customDataSchema,
  EnumTags: enumTagsSchema,
  TilesetDefinition: tilesetDefinitionSchema,
  Definitions: definitionsSchema,
} as const

export const ldtkTypeKeys = Object.freeze(
  Object.keys( schemaMap ) as LdtkTypeKey[]
)