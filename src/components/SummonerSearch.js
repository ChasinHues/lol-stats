import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LsTextInput from '../components/LsTextInput'
import LsButton from '../components/LsButton'

function SummonerSearch() {
    let [summonerName, setSummonerName] = useState('')
    const history = useHistory()

    function handleSummonerSearch(name) {
        const urlEncodedName = encodeURI(name)
        history.push('/summoner/' + urlEncodedName)
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

export default SummonerSearch