import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import SummonerSearch from './SummonerSearch'
import { useLocation } from 'react-router-dom'

function Header() {
    let location = useLocation()

    let activeLinkKey = 'home'

    if(location.pathname.indexOf('summoners') !== -1) {
        activeLinkKey = 'summoners'
    }

    return (
        <Layout.Header className="flex justify-between items-center">
            <Menu
                selectedKeys={[activeLinkKey]}
                theme="dark"
                mode="horizontal">
                <Menu.Item key="home">
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item key="summoners">
                    <NavLink to="/summoners">Summoner</NavLink>
                </Menu.Item>
            </Menu>
            <div>
                <SummonerSearch />
            </div>
        </Layout.Header>
    )
}

export default Header