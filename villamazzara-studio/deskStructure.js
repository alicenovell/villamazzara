import S from '@sanity/desk-tool/structure-builder'
 
export default () =>
//creating our list with a title & an items array
  S.list()
    .title('Content')
    .items([
      //creating a list item
      S.listItem()
        .title('Informació general')
        .child(
          //displaying out editor window using the siteSettings schema
          S.editor()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Barra de navegació')
        .child(
          //displaying out editor window using the siteSettings schema
          S.editor()
            .schemaType('nav')
            .documentId('nav')
        ),
      // add a visual divider (optional)
      S.divider(),
      S.listItem()
        .title('Benvinguts')
        .child(
          //displaying out editor window using the siteSettings schema
          S.editor()
            .schemaType('benvinguts')
            .documentId('benvinguts')
        ),
      // list out the rest of the document types,
      //but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['siteSettings','benvinguts','nav'].includes(listItem.getId()))
    ])