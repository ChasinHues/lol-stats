import React from 'react'

function Card(props) {
    return (
        <div className="bg-white rounded-lg shadow-lg m-2 p-2">
            {props.children}
        </div>
    )
}

export default Card