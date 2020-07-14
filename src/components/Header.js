import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, Layout, Avatar } from 'antd'

function Header() {
    return (
        <Layout.Header className="flex">
            <div>
                <Link to="/">
                    <Avatar 
                        size={48}
                        src="http://ddragon.leagueoflegends.com/cdn/10.14.1/img/item/1001.png" alt="meme logo :D"/>
                </Link>
            </div>
            <Menu
                theme="dark"
                mode="horizontal">
                <Menu.Item>
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/summoner">Summoner</NavLink>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    )
}

export default Header