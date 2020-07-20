import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import Loading from './Loading'

//http://ddragon.leagueoflegends.com/cdn/10.14.1/img/profileicon/${getSummoner.profileIconId}.png

function mapState(state) {
    return {
        summoner: state.selectedSummoner.data,
        isLoading: state.selectedSummoner.isLoading
    }
}

function SummonerSummary({ summoner, isLoading }) {
    let profileImage = ''
    let summonerName = ''
    let summonerLevel = ''

    if(summoner !== null) {
        profileImage = <img src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/profileicon/${summoner.profileIconId}.png`} alt='Summoner profile' />
        summonerName = <h2>{summoner.name}</h2>
        summonerLevel = <p>Level {summoner.summonerLevel}</p>
    }

    return (
        <Card>
            {isLoading && <Loading />}
            {profileImage}
            {summonerName}
            {summonerLevel}
        </Card>
    )
}

export default connect(mapState)(SummonerSummary)