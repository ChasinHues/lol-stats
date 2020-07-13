import React from 'react'
import { connect } from 'react-redux'
import MatchSummary from '../components/MatchSummary'
import Loading from '../components/Loading'

const mapState = (state) => {
    return {
        matches: state.matchListReference.data,
        isLoading: state.matchListReference.isLoading
    }
}

function MatchHistory({ matches, isLoading }) {

    return (
        <div>
            <h1 className="text-4xl font-bold">Match history</h1>
            {isLoading && <Loading />}
            {matches.map(match => (
                <MatchSummary key={match.gameId} match={match} />
            ))}
        </div>
        
    )
}

export default connect(mapState)(MatchHistory)