import React from 'react'

const Dropdown = ({isOpen,toggle}) => {
    return (
        <div className={isOpen ? "grid grid-rows-8 h-drop w-screen text-center items-center justify-items-center" : "hidden"} onClick={toggle}>
            <p className="">La casa</p>
            <p className="">Galeria</p>
            <p className="">Activitats</p>
            <p className="">Preus</p>
            <p className="">Ubicació</p>
            <p className="">Contacte</p>
            <p className="bg-verdfosc hover:bg-verdclar font-semibold text-white py-3 w-24 tracking-wide	">RESERVA</p>
            <p className="">CAT</p>

        </div>
    )
}

export default Dropdown
