import React, {useState} from "react"
import {Link} from 'gatsby'

const Header = ({toggle}) => {

    return (
        <nav className="whitespace-nowrap grid grid-cols-12 h-28 p-2 content-center text-center justify-items-center items-baseline" >
            <Link to="/" className="text-3xl font-serif col-span-8 lg:col-span-4 font-bold text-left justify-self-start pl-8 tracking-wide">Villa Mazzara</Link>
            <div className="cursor-pointer flex justify-center lg:hidden col-span-2 col-end-13" onClick={toggle}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <Link to="" className="lg:block hidden">La casa</Link>
            <Link to="" className="lg:block hidden">Galeria</Link>
            <Link to="/activitats/" className="lg:block hidden">Activitats</Link>
            <Link to="/preus/" className="lg:block hidden">Preus</Link>
            <Link to="" className="lg:block hidden">Ubicació</Link>
            <Link to="" className="lg:block hidden">Contacte</Link>
            <button className="lg:block hidden bg-verdfosc hover:bg-verdclar font-semibold text-white py-3 w-24 focus:outline-none	 rounded-sm tracking-wide">RESERVA</button>
            <Link to="" className="lg:block hidden">CAT</Link>

        </nav>

 

    );
};
export default Header;
