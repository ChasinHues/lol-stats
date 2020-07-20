import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import MatchSummary from '../components/MatchSummary'
import Loading from '../components/Loading'
import { Typography, Button } from 'antd'


const { Title } = Typography

const mapState = (state) => {
    return {
        matches: state.matches,
        selectedSummoner: state.selectedSummoner
    }
}

function MatchHistory({ matches, selectedSummoner }) {
    const [visibleMatches, setVisibleMatches] = useState([])
    
    useEffect(() => {
        setVisibleMatches(matches.data.slice(0, 10))
    }, [matches])

    function handleClick() {
        setVisibleMatches(matches.data.slice(0, visibleMatches.length + 10))
    }

    return (
        <div>
            <Title>Match history</Title>
            {matches.isLoading && <Loading />}
            <div>
                {visibleMatches.map(match => <MatchSummary key={match.gameId} match={match} selectedSummonerId={selectedSummoner.data.id} /> )}
            </div>
            <div>
                <Button
                    onClick={handleClick}
                >Load more</Button>
            </div>
        </div>
        
    )
}

export default connect(mapState)(MatchHistory)