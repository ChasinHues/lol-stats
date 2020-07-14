import React from 'react'
import { Card } from 'antd'
import MatchHistory from '../containers/MatchHistory'
import SummonerSearch from './SummonerSearch'

function SummonerStatistics() {
    return (
        <div className="w-full">
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