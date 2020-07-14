import React from 'react'
import * as championsData from '../champions.json'
import AvatarImage from './AvatarImage'

// const match = {
//     champion: 1,
//     gameId: 302317452,
//     lane: "TOP",
//     platformId: "OC1",
//     queue: 450,
//     role: "DUO_SUPPORT",
//     season: 13,
//     timestamp: 1588421961968
// }

const championsObj = championsData.default.data

const champions = Object.keys(championsObj).map(i => championsObj[i])

function MatchSummary(props) {
    const champion = champions.find(c => {
        return +c.key === props.match.champion
    })

    return (
        <div className="flex">
            <AvatarImage src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/champion/${champion.id}.png`} />
            <div>{champion.name}</div>
        </div>
    )
}

export default MatchSummary