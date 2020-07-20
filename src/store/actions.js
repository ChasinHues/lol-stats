import { 
    getSummonerByName, 
    getMatchList, 
    getMatch,
    getChampions
} from '../riot-api.layer'


// Action constants
export const SUMMONER_REQUESTED = 'SUMMONER_REQUESTED'
export const SUMMONER_RECEIVED = 'SUMMONER_RECEIVED'
export const REQUEST_SUMMONER_AND_MATCHLIST = 'REQUEST_SUMMONER_AND_MATCHLIST'
export const MATCHLIST_REQUESTED = 'MATCHLIST_REQUESTED'
export const MATCHLIST_RECEIVED = 'MATCHLIST_RECEIVED'
export const CHAMPIONS_REQUESTED = 'CHAMPIONS_REQUESTED'
export const CHAMPIONS_RECEIVED = 'CHAMPIONS_RECEIVED'


// Synchronous action creators
function requestSummoner(name) {
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

function requestSummonerAndMatchList() {
    return {
        type: REQUEST_SUMMONER_AND_MATCHLIST
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

function requestChampions() {
    return {
        type: CHAMPIONS_REQUESTED
    }
}

function receiveChampions(champions) {
    return {
        type: CHAMPIONS_RECEIVED,
        champions: champions
    }
}


// Async action creators
export function fetchMatchList(accountId) {
    return function(dispatch) {
        dispatch(requestMatchList())
        return getMatchList(accountId)
            .then(response => response.data.matches)
            .then(matchlist => dispatch(receiveMatchList(matchlist)))
    }
}

export function fetchSummoner(name) {
    return function(dispatch) {
        dispatch(requestSummoner())
        return getSummonerByName(name)
            .then(response => response.data)
            .then(summoner => {
                dispatch(receiveSummoner(summoner))
            })
    }
}

export function fetchSummonerAndMatchList(name) {
    return async function(dispatch) {
        // Update state that to refelect that 
        // summoner and match list are being fetched
        dispatch(requestSummonerAndMatchList())

        // Fetch the summoner from the Riot API
        // Then fetch that summoners match list
        // Then fetch detail for the first 10 matches
        const summoner = await getSummonerByName(name)
            .then(response => response.data)
            .then(summoner => {
                dispatch(receiveSummoner(summoner))
                return summoner
            })

        const matchList = await getMatchList(summoner.accountId)
            .then(response => response.data.matches)
            .then(matchList => {
                // dispatch(receiveMatchList(matchList))
                return matchList
            })

        // Update first 10 matches in matchlist with
        // additional match information
        for(let i = 0; i < 10; i++) {
            let match = await getMatch(matchList[i].gameId)
            .then(response => {
                return {
                    ...response.data,

                }
            })
            matchList[i] = {
                ...matchList[i],
                ...match
            }
        }
            
        dispatch(receiveMatchList(matchList))
    }
}

export function fetchChampions() {
    return async function(dispatch) {
        dispatch(requestChampions())
        const champions = await getChampions()
            .then(response => response.data.data)
        dispatch(receiveChampions(champions))
    }
}
