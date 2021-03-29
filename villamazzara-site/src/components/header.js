import React, {useState} from "react"
import {Link,useStaticQuery,graphql} from 'gatsby'

const Header = ({toggle,lang}) => {
    const data =useStaticQuery(graphql`
    query header {
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
        <nav className="whitespace-nowrap grid grid-cols-12 h-28 p-2 content-center text-center justify-items-center items-baseline" >
            <Link to={`/${lang}/`} className="text-3xl font-serif col-span-8 lg:col-span-4 font-bold text-left justify-self-start pl-8 tracking-wide">Villa Mazzara</Link>
            <div className="cursor-pointer flex justify-center lg:hidden col-span-2 col-end-13" onClick={toggle}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <Link to={`/${lang}/`} className="lg:block hidden">{lacasa}</Link>
            <Link to={`/${lang}/galeria/`} className="lg:block hidden">{galeria}</Link>
            <Link to={`/${lang}/activitats/`} className="lg:block hidden">{activitats}</Link>
            <Link to={`/${lang}/preus/`} className="lg:block hidden">{preus}</Link>
            <Link to={`/${lang}/ubicacio/`} className="lg:block hidden">{ubicacio}</Link>
            <Link to={`/${lang}/contacte/`} className="lg:block hidden">{contacte}</Link>
            <button className="lg:block hidden bg-verdfosc hover:bg-verdclar font-semibold text-white py-3 w-24 focus:outline-none	 rounded-sm tracking-wide">{reserva}</button>
            <Link to="" className="lg:block hidden">CAT</Link>

        </nav>

 

    );
};
export default Header;
