import { getSummonerByName } from '../riot-api.layer'

// ACTIONS
// Actions are payloads of information that send data from your application to your store.
export const SUMMONER_REQUESTED = 'SUMMONER_REQUESTED'
export const SUMMONER_RECEIVED = 'SUMMONER_RECEIVED'

function requestSummoner() {
    return {
        type: SUMMONER_REQUESTED
    }
}

function receiveSummoner(summoner) {
    return {
        type: SUMMONER_RECEIVED,
        summoner: summoner
    }
}

export function fetchSummoner(name) {
    return function(dispatch) {
        dispatch(requestSummoner())
        return getSummonerByName(name)
            .then(response => response.data)
            .then(summoner => dispatch(receiveSummoner(summoner)))
    }
}