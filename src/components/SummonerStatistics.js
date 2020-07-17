import React from 'react'
import { Card } from 'antd'
import MatchHistory from '../containers/MatchHistory'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'

function SummonerStatistics() {
    let { path, url } = useRouteMatch()

    return (
        <Card>
            <Switch>
                <Route exact path={path}>
                    <Redirect to={`${url}/overview`} />
                </Route>
                <Route path={`${path}/overview`}>
                    overview
                </Route>
                <Route path={`${path}/matches`}>
                    <MatchHistory />
                </Route>
                <Route path={`${path}/champions`}>
                    champions
                </Route>
            </Switch>
        </Card>
    )
}

export default SummonerStatistics