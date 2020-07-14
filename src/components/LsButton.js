import React from 'react'
import { Button } from 'antd'

function LsButton(props) {
    return (
        // <button 
        //     className="rounded bg-blue-500 text-white font-bold px-2"
        //     onClick={props.handleClick}
        // >
        //     {props.children}
        // </button>
        <Button
            type="primary"
            onClick={props.handleClick}
            >
            {props.children}
        </Button>
    )
}

export default LsButton