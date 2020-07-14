import React from 'react'
import * as championsData from '../champions.json'
import { Avatar } from 'antd'

const championsObj = championsData.default.data

const champions = Object.keys(championsObj).map(i => championsObj[i])

function MatchSummary(props) {
    const champion = champions.find(c => {
        return +c.key === props.match.champion
    })

    return (
        <div className="flex items-center">
            <Avatar 
                size={64}
                src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/champion/${champion.id}.png`} />
            <div>{champion.name}</div>
        </div>
    )
}

export default MatchSummary