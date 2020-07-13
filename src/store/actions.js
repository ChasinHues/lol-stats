import { 
    getSummonerByName, 
    getMatchList 
} from '../riot-api.layer'

// ACTIONS
// Actions are payloads of information that send data from your application to your store.
export const SUMMONER_REQUESTED = 'SUMMONER_REQUESTED'
export const SUMMONER_RECEIVED = 'SUMMONER_RECEIVED'
export const MATCHLIST_REQUESTED = 'MATCHLIST_REQUESTED'
export const MATCHLIST_RECEIVED = 'MATCHLIST_RECEIVED'

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

function requestMatchList() {
    return {
        type: MATCHLIST_REQUESTED
    }
}

function receiveMatchList(matchlist) {
    return {
        type: MATCHLIST_RECEIVED,
        matchlist: matchlist
    }
}

export function fetchSummoner(name) {
    return function(dispatch) {
        dispatch(requestSummoner())
        return getSummonerByName(name)
            .then(response => response.data)
            .then(summoner => {
                dispatch(receiveSummoner(summoner))
                dispatch(fetchMatchList(summoner.accountId))
            })
    }
}

function fetchMatchList(accountId) {
    return function(dispatch) {
        dispatch(requestMatchList())
        return getMatchList(accountId)
            .then(response => response.data.matches)
            .then(matchlist => dispatch(receiveMatchList(matchlist)))
    }
}