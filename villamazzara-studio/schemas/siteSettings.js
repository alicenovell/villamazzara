import social from "./social";
import direccio from "./direccio";


export default {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'document',
  fields: [
      {
          title: 'Nom de la pàgina web',
          name: 'siteName',
          type: 'string',
          validation: Rule => Rule.required()
      },
      {
          title: 'Correu electrònic',
          name: 'email',
          type: 'string'
      },
      {
          title:'Telèfon',
          name: 'phone',
          type: 'string'
      },
      {
        title:'Adreça',
        name: 'adress',
        type: 'direccio',
    },
      {
        title: 'Xarxes socials',
        name: 'socialLinks',
        // creates an array of objects with 
        // the shape we described in social.js
        type: 'array',
        of: [{type: 'social'}]
      }
  ]
}