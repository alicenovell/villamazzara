import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import Img from "gatsby-image"


const FitxaAct = ({titol,text,imatge,lang}) => {

    var x=0
    var y=0

    if (imatge.hotspot == null){
        x = 0;
        y = 0;
    } else {
        x = imatge.hotspot.x;
        y = imatge.hotspot.y;
    }

    if (lang == "ca") {
        titol=titol.ca
        text=text.ca
      } else if (lang == "es"){
          titol=titol.es
          text=text.es
      } else if (lang =="en"){
          titol=titol.en
          text=text.en
      } else if (lang == "fr"){
          titol=titol.fr
          text=text.fr
      } else {
          titol=titol.ca
          text=text.ca
      }


    return (
        <div className="w-72 bg-beige rounded overflow-hidden shadow-md my-2">
            {/* <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/> */}
                <Img fluid={imatge.asset.fluid} alt="prova" className="w-80 h-60" imgStyle={{objectPosition:`${x*100}% ${y*100}%`}} />
            <div className="px-6 py-4">
                <div className="font-bold text-negre font-serif text-xl mb-2">{titol}</div>
                <p className="text-negre">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default FitxaAct