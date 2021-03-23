export default {
  name: 'llistacaract',
  title: 'Característica de la casa',
  type: 'object',
  hidden :true,
  fields: [
    {
      name: 'titol',
      title: 'Titol',
      type: 'string',
    },
    {
      name: 'imatge',
      title: 'Imatge',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'text',
      title: 'Descripció',
      type: 'text',
    },
  ],
}
