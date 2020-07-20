import React from 'react'
import { connect } from 'react-redux'
import { Avatar } from 'antd'

const mapState = (state) => {
    return {
        champions: state.champions
    }
}

function MatchSummary({ match, champions }) {

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