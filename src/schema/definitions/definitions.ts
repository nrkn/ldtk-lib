import { objectSchema } from '../core'

import { entityDefinitionArraySchema } from './entity-definition'
import { enumDefinitionArraySchema } from './enum-definition'
import { externalEnumDefinitionArraySchema } from './external-enum-definition'
import { layerDefinitionArraySchema } from './layer-definition'
import { tilesetDefinitionArraySchema } from './tileset-definition'

export const definitionsSchema = {
  ...objectSchema,
  properties: {
    entities: entityDefinitionArraySchema,
    enums: enumDefinitionArraySchema,
    externalEnums: externalEnumDefinitionArraySchema,
    layers: layerDefinitionArraySchema,
    tilesets: tilesetDefinitionArraySchema
  },
  required: [ 'entities', 'enums', 'externalEnums', 'layers', 'tilesets' ]
} as const
