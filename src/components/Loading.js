import React from 'react'
import './Loading.css'

function Loading() {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <div class="lds-ripple"><div></div><div></div></div>
        </div>
    )
}

export default Loading