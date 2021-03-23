export default {
    title: 'Xarxa social',
    name: 'social',
    type: 'object',
    fields: [
      {
        title: 'Nom',
        name: 'name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'Link',
        name: 'link',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'Icona',
        name: 'icon',
        type: 'string',
        description: 'Busca el nom de l\'icona que vols utilitzar en aquest link: https://fontawesome.com/icons?d=gallery&s=brands',
        validation: Rule => Rule.required()
      }
    ]
  }