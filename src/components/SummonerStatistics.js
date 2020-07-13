import React from 'react'
import Card from './Card'
import MatchHistory from './MatchHistory'
import SummonerSearch from '../container/SummonerSearch'

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