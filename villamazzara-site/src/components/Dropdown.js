import React from 'react'
import {Link,useStaticQuery,graphql} from 'gatsby'

const Dropdown = ({isOpen,toggle,lang}) => {
    const data =useStaticQuery(graphql`
    query dropdown {
        sanityNav {
            lacasa {
              ca
              es
              en
              fr
            }
            galeria {
              ca
              es
              en
              fr
            }
            preus {
              ca
              es
              en
              fr
            }
            activitats {
              ca
              es
              en
              fr
            }
            ubicacio {
                ca
                es
                en
                fr
              }
            contacte {
              ca
              es
              en
              fr
            }
            reserva {
              ca
              es
              en
              fr
            }
          }
        }
      `)
      let lacasa=data.sanityNav.lacasa.ca
      let galeria=data.sanityNav.galeria.ca
      let activitats=data.sanityNav.activitats.ca
      let preus=data.sanityNav.preus.ca
      let ubicacio=data.sanityNav.ubicacio.ca
      let contacte=data.sanityNav.contacte.ca
      let reserva=data.sanityNav.reserva.ca

      if (lang == "ca") {
        lacasa=data.sanityNav.lacasa.ca
        galeria=data.sanityNav.galeria.ca
        activitats=data.sanityNav.activitats.ca
        preus=data.sanityNav.preus.ca
        ubicacio=data.sanityNav.ubicacio.ca
        contacte=data.sanityNav.contacte.ca
        reserva=data.sanityNav.reserva.ca
      } else if (lang == "es"){
          lacasa=data.sanityNav.lacasa.es
          galeria=data.sanityNav.galeria.es
          activitats=data.sanityNav.activitats.es
          preus=data.sanityNav.preus.es
          ubicacio=data.sanityNav.ubicacio.es
          contacte=data.sanityNav.contacte.es
          reserva=data.sanityNav.reserva.es
      } else if (lang =="en"){
          lacasa=data.sanityNav.lacasa.en
          galeria=data.sanityNav.galeria.en
          activitats=data.sanityNav.activitats.en
          preus=data.sanityNav.preus.en
          ubicacio=data.sanityNav.ubicacio.en
          contacte=data.sanityNav.contacte.en
          reserva=data.sanityNav.reserva.en
      } else if (lang == "fr"){
          lacasa=data.sanityNav.lacasa.fr
          galeria=data.sanityNav.galeria.fr
          activitats=data.sanityNav.activitats.fr
          preus=data.sanityNav.preus.fr
          ubicacio=data.sanityNav.ubicacio.fr
          contacte=data.sanityNav.contacte.fr
          reserva=data.sanityNav.reserva.fr
      } else {
          lacasa=data.sanityNav.lacasa.ca
          galeria=data.sanityNav.galeria.ca
          activitats=data.sanityNav.activitats.ca
          preus=data.sanityNav.preus.ca
          ubicacio=data.sanityNav.ubicacio.ca
          contacte=data.sanityNav.contacte.ca
          reserva=data.sanityNav.reserva.ca
      }
    return (
        <div className={isOpen ? "grid grid-rows-8 h-drop w-screen text-center items-center justify-items-center pb-14" : "hidden"} onClick={toggle}>
            <Link to={`/${lang}/`} className="">{lacasa}</Link>
            <Link to={`/${lang}/galeria/`} className="">{galeria}</Link>
            <Link to={`/${lang}/activitats/`} className="">{activitats}</Link>
            <Link to={`/${lang}/preus/`} className="">{preus}</Link>
            <Link to={`/${lang}/ubicacio/`} className="">{ubicacio}</Link>
            <Link to={`/${lang}/contacte/`} className="">{contacte}</Link>
            <p className="bg-verdfosc hover:bg-verdclar font-semibold text-white py-3 w-24 tracking-wide">RESERVA</p>
            <p className="">CAT</p>

        </div>
    )
}

export default Dropdown
