export default {
  name: 'llistaact',
  title: 'Llista d\'activitats',
  type: 'document',
  fields: [
    {
      name: 'titol',
      title: 'Titol',
      type: 'string',
    },
    {
      title: 'Tipus d\'activitat',
      name: 'tipusact',
      type: 'string',
      options: {
        list: [
          {title: 'Cultural', value: 'cultural'},
          {title: 'Esportiva', value: 'esportiva'},
          {title: 'Oci', value: 'oci'},
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
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
