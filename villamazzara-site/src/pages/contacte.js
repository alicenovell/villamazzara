import React, {useState} from "react"
import Header from "../components/header"
import Dropdown from "../components/Dropdown"
import "@fontsource/raleway" 
import "@fontsource/playfair-display" 
import {graphql,Link} from 'gatsby'
import Footer from "../components/footer"



const Contacte = () => {
  const [isOpen,setIsOpen]= useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  };


    return (
		<div className="font-sans bg-blanc text-negre flex flex-col ">
				
			<Header toggle={toggle}/>
			<Dropdown isOpen={isOpen} toggle={toggle}/>
            <form name="Contacte" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="Contacte" value="contact" />

                <input name="name" type="text" class="form-control" placeholder="Nom" required/>
                <input name="tel" type="tel" class="form-control" placeholder="Telèfon" required/>
                <input name="email" type="email" class="form-control" placeholder="Email" required/>
                <textarea name="message" class="form-control" placeholder="Missatge" cols="30" rows="5" required></textarea>

                <button>Send</button>
                
            </form>
            <Footer/>


		</div>


    );
};
export default Contacte;