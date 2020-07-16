import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSummonerAndMatchList } from '../store/actions'
import SummonerSummary from '../components/SummonerSummary'
import SummonerStatistics from '../components/SummonerStatistics'
import { Row, Col } from 'antd'

function SummonerStatisticsPage({ match, dispatch }) {

    useEffect(() => {
        const summonerName = match.params.summonerName
        dispatch(fetchSummonerAndMatchList(summonerName))
    })

    return (
        <Row>
            <Col flex="0 0 200px">
                <SummonerSummary />
            </Col>
            <Col flex="1 1 auto">
                <SummonerStatistics />
            </Col>
        </Row>
    )
}

export default connect()(SummonerStatisticsPage)