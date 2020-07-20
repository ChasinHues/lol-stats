import React from 'react'
import { connect } from 'react-redux'
import { Avatar } from 'antd'

const mapState = (state) => {
    return {
        champions: state.champions
    }
}

function MatchSummary({ match, champions, selectedSummonerId }) {
    getMatchResult()

    function getChampionAssetByKey(key) {
        let assetUri = 'https://static.developer.riotgames.com/img/logo.png'
        const championValues = Object.values(champions.data)

        for(let i = 0; i < championValues.length; i++) {
            if(championValues[i].key == key) {
                assetUri = `http://ddragon.leagueoflegends.com/cdn/10.14.1/img/champion/${championValues[i].id}.png`
                break
            }
        }

        return assetUri
    }

    function getMatchResult() {
        // look for summoner id in match.participantIdentities
        const participantId = match.participantIdentities.filter(participant => {
            return participant.player.summonerId === selectedSummonerId
        }).map(participant => participant.participantId)

        // when match found, get that iterations participant id

        // look for participant id in participants
        const participant = match.participants.filter(participant => {
            return participant.participantId == participantId[0]
        })

        console.log(participant)

        // when match found, get that iterations stats.win
    }

    return (
        <div className="flex">
            <div>
                <div>{match.gameMode}</div>
                <div>Victory</div>
            </div>
            <div>
                <Avatar 
                    src={getChampionAssetByKey(match.champion)}
                    size={48}
                    shape="square"
                />
            </div>
        </div>
    )
}

export default connect(mapState)(MatchSummary)