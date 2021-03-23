export default {
    title:'Direcció',
    name: 'direccio',
    type: 'object',
    fields:[
        {name: 'carrer', type: 'string', title: 'Carrer', description: 'Escriure amb aquest format: C/ Passeig de Gràcia, 6'},
        {name: 'codipostal', type: 'string', title: 'Codi postal'},
        {name: 'pais', type: 'string', title: 'Ciutat i pais', description: 'Escriure amb aquest format: C/ Barcelona, Catalunya'}
    ]
}