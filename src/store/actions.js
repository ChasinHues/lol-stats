import { 
    getSummonerByName, 
    getMatchList, 
    getMatch
} from '../riot-api.layer'


// Actions for summoner data
export const SUMMONER_REQUESTED = 'SUMMONER_REQUESTED'
export const SUMMONER_RECEIVED = 'SUMMONER_RECEIVED'
export const REQUEST_SUMMONER_AND_MATCHLIST = 'REQUEST_SUMMONER_AND_MATCHLIST'

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
                return matchList
            })

            for(let i = 0; i < 10; i++) {
                let match = await getMatch(matchList[i].gameId)
                .then(response => {
                    return response.data
                })
                matchList[i] = {
                    ...matchList[i],
                    ...match
                }
            }
            
        console.log(matchList)
        dispatch(receiveMatchList(matchList))
    }
}



// Actions for match list data
export const MATCHLIST_REQUESTED = 'MATCHLIST_REQUESTED'
export const MATCHLIST_RECEIVED = 'MATCHLIST_RECEIVED'

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

export function fetchMatchList(accountId) {
    return function(dispatch) {
        dispatch(requestMatchList())
        return getMatchList(accountId)
            .then(response => response.data.matches)
            .then(matchlist => dispatch(receiveMatchList(matchlist)))
    }
}



// Actions for individual match data
export const REQUEST_MATCH = 'REQUEST_MATCH'
export const RECEIVE_MATCH = 'RECEIVE_MATCH'

function receiveMatch(match) {
    return {
        type: RECEIVE_MATCH,
        action: match
    }
}

function fetchMatchDetail(gameId) {
    return function(dispatch) {
        // dispatch(requestMatch())
        return getMatch(gameId)
            .then(response => console.log)
    }
}