import React, {useState} from "react"
import Header from "../components/header"
import Dropdown from "../components/Dropdown"
import "@fontsource/raleway" 
import "@fontsource/playfair-display" 
import {graphql,Link} from 'gatsby'
import Footer from "../components/footer"
import Itemllista from "../components/itemllista"



const Reserva = ({pageContext}) => {
  const [isOpen,setIsOpen]= useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  };
  var lang=pageContext.lang


    return (
		<div className="font-sans bg-blanc text-negre flex flex-col ">
				
			<Header toggle={toggle} lang={lang}/>
			<Dropdown isOpen={isOpen} toggle={toggle} lang={lang}/>
            <div className="text-center">
                                <h1 className="font-serif text-3xl my-8 text-center">Reserva</h1>
                                <p className="">Realitza la petició de la teva reserva a través del formulari, enviant un correu o per telèfon.</p>
                                <p className="">En breu ens posarem en contacte amb vostè.</p>
                                <p className="">Moltes gràcies!</p>
            </div>
                <div className="flex items-center justify-center">
                    <div className="mx-8">
                        <div className="max-w-lg mx-auto my-10 bg-beige p-5 rounded shadow-sm">
                            <div className="m-7">
                                <form name="Contacte" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" subject="Villa Mazzara CONTACTE">

                                    <div className="mb-6">
                                        <label for="name" className="block mb-2 text-sm">Full Name</label>
                                        <input type="text" name="name" id="name" placeholder="John Doe" required className="bg-transparent w-full px-3 py-2 placeholder-verdclar border-b border-verdclar focus:outline-none focus:border-verdfosc" />
                                    </div>
                                    <div className="mb-6">
                                        <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                        <input type="email" name="email" id="email" placeholder="you@company.com" required className="bg-transparent w-full px-3 py-2 placeholder-verdclar border-b border-verdclar focus:outline-none focus:border-verdfosc" />
                                    </div>
                                    <div className="mb-6">

                                        <label for="phone" className="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
                                        <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="bg-transparent w-full px-3 py-2 placeholder-verdclar border-b border-verdclar focus:outline-none focus:border-verdfosc" />
                                    </div>
                                    <div className="mb-6">
                                        <label for="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                                        <textarea rows="5" name="message" id="message" placeholder="Your Message" className="bg-transparent w-full px-3 py-2 placeholder-verdclar border-b border-verdclar focus:outline-none focus:border-verdfosc" required></textarea>
                                    </div>
                                    <div className="mb-6">
                                        <button type="submit" className="w-full font-sans bg-verdfosc hover:bg-verdclar font-semibold text-white py-3 w-24 focus:outline-none	rounded tracking-wide">Send Message</button>
                                    </div>
                                    <p className="text-base text-center text-gray-400" id="result">
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 font-serif text-2xl">
                        <Itemllista titol="telf" icon="phone" />
                        

                    </div>
                </div>   
            <Footer/>


		</div>


    );
};
export default Reserva;