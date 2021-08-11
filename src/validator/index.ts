import Ajv from 'ajv'
import { LdtkTypeKey } from '../schema'
import { schemaMap } from '../schema/map'

const ajv = new Ajv()

const keys = Object.keys( schemaMap ) as LdtkTypeKey[]

for( const key of keys ){
  ajv.addSchema( schemaMap[ key ], key )
}

export const validator = ( type: LdtkTypeKey, data: unknown ) => {
  if( !(type in schemaMap) ) throw Error( `Unexpected type ${ type }` )

  const isValid  = ajv.validate( type, data )

  if( isValid ) return { isValid }

  return { isValid, errors: ajv.errors }
}
