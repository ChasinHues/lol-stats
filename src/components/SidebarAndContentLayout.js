import React from 'react'

function SidebarAndContentLayout(props) {
    return (
        <div className="flex m-auto w-3/4 max-w-screen-xl">
            <aside className="w-1/4">{props.sidebar}</aside>
            <div className="w-3/4">{props.content}</div>
        </div>
    )
}

export default SidebarAndContentLayout