import React from 'react'
import Card from './Card'
import { getSummoner } from '../lol-data'

function SummonerSummary() {
    return (
        <Card>
            <img src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/profileicon/${getSummoner.profileIconId}.png`} />
            <h1 className="text-4xl font-bold">{getSummoner.name}</h1>
            <span>Level {getSummoner.summonerLevel}</span>
        </Card>
    )
}

export default SummonerSummary