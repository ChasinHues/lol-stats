import React from 'react'
import SidebarAndContentLayout from '../components/SidebarAndContentLayout'
import SummonerSummary from '../components/SummonerSummary'
import SummonerStatistics from '../components/SummonerStatistics'
import { connect } from 'react-redux'
import { fetchSummoner } from '../store/actions'


function SummonerApp({ dispatch, match }) {

    dispatch(fetchSummoner(match.params.summonerName))

    return (
        <SidebarAndContentLayout
            sidebar={<SummonerSummary />}
            content={<SummonerStatistics />}
        />
    )
}

export default connect()(SummonerApp)