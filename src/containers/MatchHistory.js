import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import MatchSummary from '../components/MatchSummary'
import Loading from '../components/Loading'
import { Typography, Pagination, Button } from 'antd'
import { MATCHLIST_REQUESTED } from '../store/actions'
import { render } from '@testing-library/react'

const { Title } = Typography

const mapState = (state) => {
    return {
        matches: state.matches
    }
}

function MatchHistory({ matches }) {
    const [visibleMatches, setVisibleMatches] = useState([])

    useEffect(() => {
        setVisibleMatches(matches.slice(0, 10))
    }, matches)

    function onClick() {
        setVisibleMatches([
            ...visibleMatches,
            {
                id: visibleMatches.length
            }
        ])
    }

    return (
        <div>
            <Title>Match history</Title>
            {matches.isLoading && <Loading />}
            <div>
                {visibleMatches.map(match => {
                    return <div>match {match.id}</div>
                })}
            </div>
            <div>
                <Button
                onClick={onClick}
                >Load more</Button>
            </div>
        </div>
        
    )
}

export default connect(mapState)(MatchHistory)