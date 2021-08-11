import { autoLayerDefinitionSchemaProperties } from './auto-layer-definition'
import { customDataSchemaProperties } from './custom-data'

import { 
  entitiesLayerDefinitionSchemaProperties 
} from './entities-layer-definition'

import { entityDefinitionSchemaProperties } from './entity-definition'
import { enumDefinitionSchemaProperties } from './enum-definition'
import { enumTagsSchemaProperties } from './enum-tags'
import { enumValueDefinitionSchemaProperties } from './enum-value-definition'

import { 
  externalEnumDefinitionSchemaProperties 
} from './external-enum-definition'

import { 
  intGridLayerDefinitionSchemaProperties 
} from './int-grid-layer-definition'

import { intGridValuesSchemaProperties } from './int-grid-values'
import { tilesLayerDefinitionSchemaProperties } from './tiles-layer-definition'
import { tilesetDefinitionSchemaProperties } from './tileset-definition'


export type EntityDefinitionSchemaProperties = (
  typeof entityDefinitionSchemaProperties
)

export type EntityDefinitionKey = (
  keyof EntityDefinitionSchemaProperties
)


export type EnumDefinitionSchemaProperties = (
  typeof enumDefinitionSchemaProperties
)

export type EnumDefinitionKey = (
  keyof EnumDefinitionSchemaProperties
)


export type ExternalEnumDefinitionSchemaProperties = (
  typeof externalEnumDefinitionSchemaProperties
)

export type ExternalEnumDefinitionKey = (
  keyof ExternalEnumDefinitionSchemaProperties
)


export type EnumValueDefinitionSchemaProperties = (
  typeof enumValueDefinitionSchemaProperties
)

export type EnumValueDefinitionKey = (
  keyof EnumValueDefinitionSchemaProperties
)


export type IntGridValuesSchemaProperties = (
  typeof intGridValuesSchemaProperties
)

export type IntGridValuesKey = (
  keyof IntGridValuesSchemaProperties
)


export type IntGridLayerDefinitionSchemaProperties = (
  typeof intGridLayerDefinitionSchemaProperties
)

export type IntGridLayerDefinitionKey = (
  keyof IntGridLayerDefinitionSchemaProperties
)


export type AutoLayerDefinitionSchemaProperties = (
  typeof autoLayerDefinitionSchemaProperties
)

export type AutoLayerDefinitionKey = (
  keyof AutoLayerDefinitionSchemaProperties
)


export type TilesLayerDefinitionSchemaProperties = (
  typeof tilesLayerDefinitionSchemaProperties
)

export type TilesLayerDefinitionKey = (
  keyof TilesLayerDefinitionSchemaProperties
)


export type EntitiesLayerDefinitionSchemaProperties = (
  typeof entitiesLayerDefinitionSchemaProperties
)

export type EntitiesLayerDefinitionKey = (
  keyof EntitiesLayerDefinitionSchemaProperties
)


export type CustomDataSchemaProperties = (
  typeof customDataSchemaProperties
)

export type CustomDataKey = (
  keyof CustomDataSchemaProperties
)


export type EnumTagsSchemaProperties = (
  typeof enumTagsSchemaProperties
)

export type EnumTagsKey = (
  keyof EnumTagsSchemaProperties
)


export type TilesetDefinitionSchemaProperties = (
  typeof tilesetDefinitionSchemaProperties
)

export type TilesetDefinitionKey = (
  keyof TilesetDefinitionSchemaProperties
)
