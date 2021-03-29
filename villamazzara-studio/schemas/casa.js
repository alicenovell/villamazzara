export default {
  title: 'La casa',
  name: 'casa',
  type: 'document',
  fields: [
      {
          title: 'Titol de l\'apartat',
          name: 'subcasa',
          type: 'localeString',
          key: 'subcasa',
      },
      {
        title: 'Items',
        name: 'items',
        // creates an array of objects with 
        // the shape we described in social.js
        type: 'array',
        of: [{type: 'item'}]
      },
      {
        name: 'imatge',
        title: 'Plànol (o imatge)',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
  ]
}