import React from 'react'

const Itemllista = ({titol,icon}) => {

    return (
        <div className="flex w-72 py-3">
                <span className="material-icons mr-3">{icon}</span>
                <p className="">{titol}</p>
        </div>
    )
}

export default Itemllista