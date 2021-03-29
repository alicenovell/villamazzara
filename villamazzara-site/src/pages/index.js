import React, {useState} from "react"
import Header from "../components/header"
import Dropdown from "../components/Dropdown"
import Benvinguts from "../components/Benvinguts"
import "@fontsource/raleway" 
import "@fontsource/playfair-display" 
import {graphql,Link} from 'gatsby'
import Footer from "../components/footer"
import Llistacasa from "../components/Llistacasa"

const Inici = ({data,pageContext}) => {
  const [isOpen,setIsOpen]= useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  };
  console.log(data)

  var lang=pageContext.lang
  let plantabaixa = data.plantabaixa.nodes[0]
  let primeraplanta = data.primeraplanta.nodes[0]
  let exteriors = data.exteriors.nodes[0]

    let textcasa=data.allSanityBenvinguts.nodes[0].textcasa.ca

  if (lang == "ca") {
    textcasa=data.allSanityBenvinguts.nodes[0].textcasa.ca
  } else if (lang == "es"){
      textcasa=data.allSanityBenvinguts.nodes[0].textcasa.es
  } else if (lang =="en"){
      textcasa=data.allSanityBenvinguts.nodes[0].textcasa.en
  } else if (lang == "fr"){
      textcasa=data.allSanityBenvinguts.nodes[0].textcasa.fr
  } else {
      textcasa=data.allSanityBenvinguts.nodes[0].textcasa.ca
  }

    return (
		<div className="font-sans bg-blanc text-negre flex flex-col ">
				
			<Header toggle={toggle} lang={lang}/>
			<Dropdown isOpen={isOpen} toggle={toggle} lang={lang}/>
      <Benvinguts lang={lang}/>
      <h2 className="font-serif text-3xl mt-20 mb-8 text-center">La casa</h2>
      <h3 className="font-serif text-2xl italic mt-10 mb-8 text-center self-center max-w-2xl">{textcasa}</h3>
      <Llistacasa props={plantabaixa} rot={'-rotate-12 w-80'} lang={lang}/>
      <Llistacasa props={primeraplanta} rot={'-rotate-12 w-72'} lang={lang}/>
      <Llistacasa props={exteriors} rot={'rounded w-80'} lang={lang}/>

      <Footer/>


		</div>


    );
};

export default Inici;


export const data = graphql`
query casa {
  plantabaixa: allSanityCasa(filter: {subcasa: {ca: {eq: "Planta baixa"}}}) {
    nodes {
      subcasa{
        ca
        es
        en
        fr
      }
      items {
        titol {
          ca
          es
          en
          fr
        }
        icon
      }
      imatge {
        asset {
          fluid{
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
   primeraplanta: allSanityCasa(filter: {subcasa: {ca: {eq: "Primera planta"}}}) {
    nodes {
      subcasa{
        ca
        es
        en
        fr
      }
      items {
        titol {
          ca
          es
          en
          fr
        }
        icon
      }
      imatge {
        asset {
          fluid{
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
  exteriors: allSanityCasa(filter: {subcasa: {ca: {eq: "Exteriors"}}}) {
    nodes {
      subcasa{
        ca
        es
        en
        fr
      }
      items {
        titol {
          ca
          es
          en
          fr
        }
        icon
      }
      imatge {
        asset {
          fluid{
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
  allSanityBenvinguts {
    nodes {
      textcasa {
        ca
        es
        en
        fr
      }
  }
}
}

`