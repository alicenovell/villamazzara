import React from 'react'
import Itemllista from "./itemllista"
import Img from "gatsby-image"


const Llistacasa = ({props,rot}) => {
    let imatge = props.imatge
    var x=0
    var y=0

    if (imatge.hotspot == null){
        x = 0;
        y = 0;
    } else {
        x = imatge.hotspot.x;
        y = imatge.hotspot.y;
    }
    let foto = 'transform '+`${rot}`

    return (
        <div className="flex flex-col items-center justify-items-center mb-8">
            <h2 className="font-serif text-2xl italic mt-10 mb-8">{props.subcasa}</h2>
            <div className="flex items-center justify-between w-3/5 2xl:w-1/2">
                <div>
                {props.items.map((post,i) => (
                <Itemllista key={i} titol={post.titol} icon={post.icon} />
            ))}
                </div>
                <Img fluid={imatge.asset.fluid} alt="prova" className={foto} imgStyle={{objectPosition:`${x*100}% ${y*100}%`}} />
            </div>
        </div>  
    )}

export default Llistacasa
