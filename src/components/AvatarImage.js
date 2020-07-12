import React from 'react'

function AvatarImage(props) {
    return (
        <div className="rounded-full overflow-hidden">
            <img src={props.src} />
        </div>
    )
}

export default AvatarImage