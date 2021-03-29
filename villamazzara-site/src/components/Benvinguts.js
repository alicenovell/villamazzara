import React from 'react'
import {useStaticQuery,graphql} from "gatsby"
import FitxaAct from "./FitxaAct"

const Benvinguts = ({lang}) => {
    const data =useStaticQuery(graphql`
    query benvinguts {
        allSanityBenvinguts {
            nodes {
              textbenvinguts{
                ca
                es
                en
                fr
              }
              caracteristiques {
                titol{
                  ca
                  es
                  en
                  fr
                }
                text{
                  ca
                  es
                  en
                  fr
                }
                imatge {
                  asset {
                    fluid {
                      ...GatsbySanityImageFluid_withWebp
                    }
                  }
                  hotspot {
                    x
                    y
                  }
                }
              }
            }
          }
        }
        
      `)
    let textbenvinguts=data.allSanityBenvinguts.nodes[0].textbenvinguts.ca

    if (lang == "ca") {
      textbenvinguts=data.allSanityBenvinguts.nodes[0].textbenvinguts.ca
    } else if (lang == "es"){
        textbenvinguts=data.allSanityBenvinguts.nodes[0].textbenvinguts.es
    } else if (lang =="en"){
        textbenvinguts=data.allSanityBenvinguts.nodes[0].textbenvinguts.en
    } else if (lang == "fr"){
        textbenvinguts=data.allSanityBenvinguts.nodes[0].textbenvinguts.fr
    } else {
        textbenvinguts=data.allSanityBenvinguts.nodes[0].textbenvinguts.ca
    }

    return (
        <div className="flex flex-col items-center justify-items-center">
            <h2 className="font-serif text-3xl my-6">Benvinguts</h2>
            <h3 className="font-serif text-2xl italic mt-10 mb-8 text-center max-w-2xl">{textbenvinguts}</h3>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {data.allSanityBenvinguts.nodes[0].caracteristiques.map((post,i) => (
                <FitxaAct key={i} titol={post.titol}  text={post.text} imatge={post.imatge} lang={lang} />
            ))}
            </div>

        </div>  
    )
}

export default Benvinguts