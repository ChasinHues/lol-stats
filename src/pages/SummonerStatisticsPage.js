import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSummonerAndMatchList } from '../store/actions'
import SummonerSummary from '../components/SummonerSummary'
import SummonerStatistics from '../components/SummonerStatistics'
import { Row, Col, Layout, Card } from 'antd'
import { useRouteMatch, Link } from 'react-router-dom'

function SummonerStatisticsPage({ match, dispatch }) {
    let { path, url } = useRouteMatch()

    useEffect(() => {
        const summonerName = match.params.summonerName
        // dispatch(fetchSummonerAndMatchList(summonerName))
    })

    return (
        <Layout className="max-w-screen-xl m-6 w-full">
            <Row gutter={24}>
                <Col flex="0 0 240px">
                    <SummonerSummary />
                    <Card>
                        <div>routes</div>
                        <div><Link to={`${url}`}>Overview</Link></div>
                        <div><Link to={`${url}/matches`}>Matches</Link></div>
                        <div><Link to={`${url}/champions`}>Champions</Link></div>
                    </Card>
                </Col>
                <Col flex="1 1 auto">
                    <SummonerStatistics />
                </Col>
            </Row>
        </Layout>
    )
}

export default connect()(SummonerStatisticsPage)