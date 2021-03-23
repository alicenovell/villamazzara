import React from 'react'
import FitxaAct from "./FitxaAct"


const Activitats = (act) => {
    return (
        <div className="flex flex-col items-center justify-items-center">
            <h2 className="font-serif text-3xl my-6">Activitats</h2>
            <h3 className="font-serif text-2xl italic mt-10 mb-8">Activitats culturals</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {act.actcultural.map((post,i) => (
                <FitxaAct key={i} titol={post.titol}  text={post.text} imatge={post.imatge} />
            ))}
            </div>
            <h3 className="font-serif text-2xl italic mt-10 mb-8">Activitats esportives</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {act.actesportiva.map((post,i) => (
                <FitxaAct key={i} titol={post.titol} text={post.text} imatge={post.imatge} />
            ))}
            {}
            </div>
            <h3 className="font-serif text-2xl italic mt-10 mb-8">Activitats d'oci</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {act.actoci.map((post,i) => (
                <FitxaAct key={i} titol={post.titol} text={post.text} imatge={post.imatge}  />
            ))}
            </div>
        </div>  
    )}

export default Activitats
