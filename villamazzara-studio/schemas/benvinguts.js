export default {
  title: 'Benvinguts',
  name: 'benvinguts',
  type: 'document',
  fields: [
      {
          title: 'Descripció breu casa rural',
          name: 'textbenvinguts',
          type: 'text',
      },
      {
        title: 'Descripció breu sobre la casa una mica més concreta',
        name: 'textcasa',
        type: 'text',
    },
      {
        title: 'Llista de característiques de la casa',
        name: 'caracteristiques',
        // creates an array of objects with 
        // the shape we described in social.js
        type: 'array',
        of: [{type: 'llistacaract'}]
      }
  ]
}