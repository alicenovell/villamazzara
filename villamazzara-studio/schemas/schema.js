// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import llistaact from './llistaact'
import siteSettings from './siteSettings'
import social from './social'
import direccio from "./direccio";
import llistacaract from './llistacaract'
import benvinguts from './benvinguts'
import casa from './casa'
import item from './item'
import localeString from './localeString'
import localeText from './localeText'
import nav from './nav'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    social,
    direccio,
    llistacaract,
    benvinguts,
    casa,
    item,
    llistaact,
    localeString,
    localeText,
    nav,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
