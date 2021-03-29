import React from 'react'

const Itemllista = ({titol,icon,lang}) => {
    
    if (lang == "ca") {
        titol=titol.ca
      } else if (lang == "es"){
          titol=titol.es
      } else if (lang =="en"){
          titol=titol.en
      } else if (lang == "fr"){
          titol=titol.fr
      } else {
          titol=titol.ca
      }
    return (
        <div className="flex py-3 items-center">
                <span className="material-icons mr-3">{icon}</span>
                <p className="">{titol}</p>
        </div>
    )
}

export default Itemllista