import React from 'react'
import { Layout } from 'antd'
import MatchHistory from '../containers/MatchHistory'
import SummonerSearch from './SummonerSearch'

function SummonerStatistics() {
    return (
        <Layout>
            <Layout>
                <h2>Search for a summoner:</h2>
                <SummonerSearch />
            </Layout>
            <Layout>
                <MatchHistory />
            </Layout>
        </Layout>
    )
}

export default SummonerStatistics