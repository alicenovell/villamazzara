module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active'],
    }
  },
  theme: {
    
    extend: {
      fontFamily: {
        sans:[
          'Raleway',
          'Helvetica', 'Arial', 'sans-serif'
        ],
        serif:[
          'Playfair Display'
        ],
        mono: [
          'IBM Plex Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      colors:{
        'beige':'#DCDBD0',
        'blanc':'#FFF8F2',
        'negre':'#2F2C22',
        'verdfosc':'#939176',
        'verdclar':'#AFAD97',

  
      },
      zIndex: {
        '-10': '-10',
       },
      inset:{
        '1/5':'18%',
        'blopx':'-5%',
        'blopy':'70%',
        'bloplila':'60%',
        'blopgroc':'-10%',
        'text':'25%',
        '1/2':'50%',
      },
      height:{
        'drop':'calc(100vh - 7rem)',
      }
    }
  },
  corePlugins: {
    container: false
  }
}