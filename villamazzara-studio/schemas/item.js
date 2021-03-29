export default {
    name: 'item',
    title: 'Item',
    type: 'object',
    hidden :true,
    fields: [
        {
        name: 'titol',
        title: 'Titol',
        type: 'localeString',
        },
        {
            title: 'Icona',
            name: 'icon',
            type: 'string',
            description: 'Busca el nom de l\'icona que vols utilitzar en aquest link: https://fonts.google.com/icons',
            }
    ],
  }
  