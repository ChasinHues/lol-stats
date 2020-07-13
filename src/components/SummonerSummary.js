import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

//http://ddragon.leagueoflegends.com/cdn/10.14.1/img/profileicon/${getSummoner.profileIconId}.png

function mapState(state) {
    return {
        summoner: state.selectedSummoner
    }
}

function SummonerSummary({ summoner }) {
    let profileImage = ''
    let summonerName = ''
    let summonerLevel = ''

    if(summoner !== null) {
        profileImage = <img src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/profileicon/${summoner.profileIconId}.png`} />
        summonerName = <h2>{summoner.name}</h2>
        summonerLevel = <p>Level {summoner.summonerLevel}</p>
    }

    return (
        <Card>
            {profileImage}
            {summonerName}
            {summonerLevel}
        </Card>
    )
}

export default connect(mapState)(SummonerSummary)