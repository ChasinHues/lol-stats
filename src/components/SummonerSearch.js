import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Input } from 'antd'

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
        <div className="flex">
            <Input 
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={summonerName} />
            <Button onClick={handleClick}>Search</Button>
        </div>
    )
}

export default SummonerSearch