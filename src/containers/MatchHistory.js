import React from 'react'
import { connect } from 'react-redux'
import MatchSummary from '../components/MatchSummary'

const mapState = (state) => {
    return {
        matches: state.matchListReference
    }
}

function MatchHistory({ matches }) {

    return (
        <div>
            <h1 className="text-4xl font-bold">Match history</h1>
            {matches.map(match => (
                <MatchSummary key={match.gameId} match={match} />
            ))}
        </div>
        
    )
}

export default connect(mapState)(MatchHistory)