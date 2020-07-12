import React from 'react'
import { getMatchList } from '../lol-data'
import MatchSummary from './MatchSummary'

function MatchHistory() {
    const matches = getMatchList.matches.slice(0, 10)

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