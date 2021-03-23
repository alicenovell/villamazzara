import React, {useState} from "react"
import Header from "../components/header"
import Dropdown from "../components/Dropdown"
import Benvinguts from "../components/Benvinguts"
import "@fontsource/raleway" 
import "@fontsource/playfair-display" 
import {graphql,Link} from 'gatsby'
import Footer from "../components/footer"
import Llistacasa from "../components/Llistacasa"



const Inici = ({data}) => {
  const [isOpen,setIsOpen]= useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  };

  let plantabaixa = data.plantabaixa.nodes[0]
  let primeraplanta = data.primeraplanta.nodes[0]
  let exteriors = data.exteriors.nodes[0]

    return (
		<div className="font-sans bg-blanc text-negre flex flex-col ">
				
			<Header toggle={toggle}/>
			<Dropdown isOpen={isOpen} toggle={toggle}/>
      <Benvinguts/>
      <h2 className="font-serif text-3xl mt-20 mb-8 text-center">La casa</h2>
      <h3 className="font-serif text-2xl italic mt-10 mb-8 text-center self-center max-w-2xl">{data.allSanityBenvinguts.nodes[0].textcasa}</h3>
      <Llistacasa props={plantabaixa} rot={'-rotate-12 w-80'}/>
      <Llistacasa props={primeraplanta} rot={'-rotate-12 w-72'}/>
      <Llistacasa props={exteriors} rot={'rounded w-80'}/>

      <Footer/>


		</div>


    );
};
export default Inici;

export const data = graphql`
query casa {
  plantabaixa: allSanityCasa(filter: {subcasa: {eq: "Planta baixa"}}) {
    nodes {
      subcasa
      items {
        titol
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
   primeraplanta: allSanityCasa(filter: {subcasa: {eq: "Primera planta"}}) {
    nodes {
      subcasa
      items {
        titol
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
  exteriors: allSanityCasa(filter: {subcasa: {eq: "Exteriors"}}) {
    nodes {
      subcasa
      items {
        titol
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
      textcasa
  }
}
}

`