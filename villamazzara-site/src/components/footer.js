import React, {useState} from "react"
import {useStaticQuery,graphql} from "gatsby"

const Footer = () => {
    const data =useStaticQuery(graphql`
    query Config {
        sanitySiteSettings {
          phone
          email
          adress {
            carrer
            codipostal
            pais
          }
        }
      }
      `)

    return (
        <footer className="" >
            
            <div className="whitespace-nowrap mt-8 grid md:grid-cols-2 h-40 md:px-10 lg:px-28 items-center font-semibold font-serif text-xl">
              <div className="text-center md:text-left">
					<p>{data.sanitySiteSettings.phone}</p>
					<p>{data.sanitySiteSettings.email}</p>
              </div>
              <div className="text-center md:text-right">
					<p>{data.sanitySiteSettings.adress.carrer}</p>
					<p>{data.sanitySiteSettings.adress.codipostal}</p>
					<p>{data.sanitySiteSettings.adress.pais}</p>
              </div>
            </div>	
            <p className="text-center self-end font-sans text-sm mt-6 md:mt-0">2021 Villa Mazzara</p>
        </footer>

 

    );
};
export default Footer;