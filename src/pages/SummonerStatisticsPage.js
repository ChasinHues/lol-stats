import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSummonerAndMatchList } from '../store/actions'
import SidebarAndContentLayout from '../components/SidebarAndContentLayout'
import SummonerSummary from '../components/SummonerSummary'
import SummonerStatistics from '../components/SummonerStatistics'

function SummonerStatisticsPage({ match, dispatch }) {

    useEffect(() => {
        const summonerName = match.params.summonerName
        dispatch(fetchSummonerAndMatchList(summonerName))
    })

    return (
        <SidebarAndContentLayout
            sidebar={<SummonerSummary />}
            content={<SummonerStatistics />}
        />
    )
}

export default connect()(SummonerStatisticsPage)