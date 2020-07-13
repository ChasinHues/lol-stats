import React from 'react'

function LsButton(props) {
    return (
        <button 
            className="rounded bg-blue-500 text-white font-bold px-2"
            onClick={props.handleClick}
        >
            {props.children}
        </button>
    )
}

export default LsButton