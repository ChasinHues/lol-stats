import React from 'react'
import MatchSummary from '../components/MatchSummary'

function MatchHistory() {
    const matches = []

    return (
        <div>
            <h1 className="text-4xl font-bold">Match history</h1>
            {matches.map(match => (
                <MatchSummary key={match.gameId} match={match} />
            ))}
        </div>
        
    )
}

export default MatchHistory