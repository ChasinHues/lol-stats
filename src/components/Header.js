import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
        <header className="flex justify-between items-center bg-black py-2 text-white">
            <div>
                <Link to="/">
                    <img src="http://ddragon.leagueoflegends.com/cdn/10.14.1/img/item/1001.png" alt="meme logo :D"/>
                </Link>
            </div>
            <nav className="h-full">
                <NavLink to="/" className="p-2 hover:text-green-500">Home</NavLink>
                <NavLink to="/summoner" className="p-2 hover:text-green-500">Summoner</NavLink>
            </nav>
        </header>
    )
}

export default Header