import React from 'react'
import Card from './Card'
import MatchHistory from '../containers/MatchHistory'
import SummonerSearch from './SummonerSearch'

function SummonerStatistics() {
    return (
        <div>
            <Card>
                <h2>Search for a summoner:</h2>
                <SummonerSearch />
            </Card>
            <Card>
                <MatchHistory />
            </Card>
        </div>
    )
}

export default SummonerStatistics