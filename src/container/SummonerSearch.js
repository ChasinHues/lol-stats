import React, { useState } from 'react'
import { connect } from 'react-redux'
import LsTextInput from '../components/LsTextInput'
import LsButton from '../components/LsButton'
import { fetchSummoner } from '../store/actions'

function SummonerSearch({ dispatch }) {
    let [summonerName, setSummonerName] = useState('')

    function handleSummonerSearch(name) {
        dispatch(fetchSummoner(name))
    }

    function handleChange(e) {
        setSummonerName(e.target.value)
    }

    function handleKeyPress(e) {
        if(e.key === 'Enter') {
            handleSummonerSearch(summonerName)
        }
    }
    
    function handleClick() {
        handleSummonerSearch(summonerName)
    }

    return (
        <div>
            <LsTextInput 
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={summonerName} />
            <LsButton handleClick={handleClick}>Search</LsButton>
        </div>
    )
}

export default connect()(SummonerSearch)