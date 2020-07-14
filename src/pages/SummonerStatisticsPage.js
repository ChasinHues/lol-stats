import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSummonerAndMatchList } from '../store/actions'
import SummonerSummary from '../components/SummonerSummary'
import SummonerStatistics from '../components/SummonerStatistics'

function SummonerStatisticsPage({ match, dispatch }) {

    useEffect(() => {
        const summonerName = match.params.summonerName
        dispatch(fetchSummonerAndMatchList(summonerName))
    })

    return (
        <div className="flex mx-auto w-3/4">
            <SummonerSummary />
            <SummonerStatistics />
        </div>
    )
}

export default connect()(SummonerStatisticsPage)