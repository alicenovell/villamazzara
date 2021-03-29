import React, {useState} from "react"
import Header from "../components/header"
import Dropdown from "../components/Dropdown"
import Footer from "../components/footer"
import Activitats from "../components/LlistaActs"
import "@fontsource/raleway" 
import "@fontsource/playfair-display" 
import {graphql} from 'gatsby'


const Inici = ({data,pageContext}) => {
  const [isOpen,setIsOpen]= useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  };
  var lang=pageContext.lang

  let actesportiva = data.esportiva.nodes
  let actcultural = data.cultural.nodes
  let actoci = data.oci.nodes

    return (
		<div className="font-sans bg-blanc text-negre ">
				
			<Header toggle={toggle} lang={lang}/>
			<Dropdown isOpen={isOpen} toggle={toggle} lang={lang}/>
			<Activitats actesportiva={actesportiva} actcultural={actcultural} actoci={actoci} lang={lang}/>
      <Footer/>


		</div>


    );
};
export default Inici;

export const data = graphql`
query Act {
  esportiva: allSanityLlistaact(filter: {tipusact: {eq: "esportiva"}}) {
    nodes {
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
          y
          x
        }
      }
    }
  }
  cultural: allSanityLlistaact(filter: {tipusact: {eq: "cultural"}}) {
    nodes {
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
          y
          x
        }
      }
    }
  }
  oci: allSanityLlistaact(filter: {tipusact: {eq: "oci"}}) {
    nodes {
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
          y
          x
        }
      }
    }
  }
}

`