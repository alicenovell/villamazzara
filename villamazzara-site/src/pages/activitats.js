import React, {useState} from "react"
import Header from "../components/header"
import Dropdown from "../components/Dropdown"
import Footer from "../components/footer"
import Activitats from "../components/LlistaActs"
import "@fontsource/raleway" 
import "@fontsource/playfair-display" 
import {graphql} from 'gatsby'


const Inici = ({data}) => {
  const [isOpen,setIsOpen]= useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  };

  let actesportiva = data.esportiva.nodes
  let actcultural = data.cultural.nodes
  let actoci = data.oci.nodes

    return (
		<div className="font-sans bg-blanc text-negre ">
				
			<Header toggle={toggle}/>
			<Dropdown isOpen={isOpen} toggle={toggle}/>
			<Activitats actesportiva={actesportiva} actcultural={actcultural} actoci={actoci}/>
      <Footer/>


		</div>


    );
};
export default Inici;

export const data = graphql`
query Act {
  esportiva: allSanityLlistaact(filter: {tipusact: {eq: "esportiva"}}) {
    nodes {
      titol
      text
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
      titol
      text
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
      titol
      text
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