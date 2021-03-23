import React, {useState} from "react"
import Header from "../components/header"
import Dropdown from "../components/Dropdown"
import Footer from "../components/footer"
import Activitats from "../components/LlistaActs"
import "@fontsource/raleway" 
import "@fontsource/playfair-display" 
import {graphql} from 'gatsby'
import FitxaAct from "../components/FitxaAct"

const Preus = ({data}) => {
  const [isOpen,setIsOpen]= useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  };

    return (
		<div className="font-sans bg-blanc text-negre ">
				
			<Header toggle={toggle}/>
			<Dropdown isOpen={isOpen} toggle={toggle}/>
			<FitxaAct titol='hola' text='text'/>
      <Footer/>
		</div>

    );
};
export default Preus;

// export const data = graphql`
// query preus{

// }

// `