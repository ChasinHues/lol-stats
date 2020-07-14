import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MatchSummary from '../components/MatchSummary'
import Loading from '../components/Loading'

const mapState = (state) => {
    return {
        matches: state.matches
    }
}

function MatchHistory({ matches }) {

    return (
        <div>
            <h1 className="text-4xl font-bold">Match history</h1>
            {matches.isLoading && <Loading />}
            {matches.data.map(match => (
                <MatchSummary key={match.gameId} match={match} />
            ))}
        </div>
        
    )
}

export default connect(mapState)(MatchHistory)