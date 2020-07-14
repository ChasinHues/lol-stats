import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MatchSummary from '../components/MatchSummary'
import Loading from '../components/Loading'
import { Typography } from 'antd'

const { Title } = Typography

const mapState = (state) => {
    return {
        matches: state.matches
    }
}

function MatchHistory({ matches }) {

    return (
        <div>
            <Title>Match history</Title>
            {matches.isLoading && <Loading />}
            {matches.data.map(match => (
                <MatchSummary key={match.gameId} match={match} />
            ))}
        </div>
        
    )
}

export default connect(mapState)(MatchHistory)