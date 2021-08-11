import { FromSchema } from 'json-schema-to-ts'

import { 
  autoLayerDefinitionSchema, customDataSchema, definitionsSchema, 
  entitiesLayerDefinitionSchema, entityDefinitionSchema, enumDefinitionSchema, 
  enumTagsSchema, enumValueDefinitionSchema, externalEnumDefinitionSchema, 
  intGridLayerDefinitionSchema, intGridValuesSchema, layerDefinitionSchema, 
  tilesLayerDefinitionSchema, tilesetDefinitionSchema 
} from '.'

export type AutoLayerDefinition = FromSchema<typeof autoLayerDefinitionSchema>

export type CustomData = FromSchema<typeof customDataSchema>

export type Definitions = FromSchema<typeof definitionsSchema>

export type EntitiesLayerDefinition =
  FromSchema<typeof entitiesLayerDefinitionSchema>

export type EntityDefinition = FromSchema<typeof entityDefinitionSchema>

export type EnumDefinition = FromSchema<typeof enumDefinitionSchema>

export type EnumTags = FromSchema<typeof enumTagsSchema>

export type EnumValueDefinition = FromSchema<typeof enumValueDefinitionSchema>

export type ExternalEnumDefinition =
  FromSchema<typeof externalEnumDefinitionSchema>

export type IntGridLayerDefinition =
  FromSchema<typeof intGridLayerDefinitionSchema>

export type IntGridValues = FromSchema<typeof intGridValuesSchema>

export type LayerDefinition = FromSchema<typeof layerDefinitionSchema>

export type TilesLayerDefinition = FromSchema<typeof tilesLayerDefinitionSchema>

export type TilesetDefinition = FromSchema<typeof tilesetDefinitionSchema>

export type LdtkDefinitionsTypeMap = {
  AutoLayerDefinition: AutoLayerDefinition
  CustomData: CustomData
  Definitions: Definitions
  EntitiesLayerDefinition: EntitiesLayerDefinition
  EntityDefinition: EntityDefinition
  EnumDefinition: EnumDefinition
  EnumTags: EnumTags
  EnumValueDefinition: EnumValueDefinition
  ExternalEnumDefinition: ExternalEnumDefinition
  IntGridLayerDefinition: IntGridLayerDefinition
  IntGridValues: IntGridValues
  LayerDefinition: LayerDefinition
  TilesLayerDefinition: TilesLayerDefinition
  TilesetDefinition: TilesetDefinition
}
