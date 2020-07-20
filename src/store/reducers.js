import { 
    SUMMONER_REQUESTED, 
    SUMMONER_RECEIVED,
    MATCHLIST_REQUESTED, 
    MATCHLIST_RECEIVED,
    REQUEST_SUMMONER_AND_MATCHLIST,
    CHAMPIONS_REQUESTED,
    CHAMPIONS_RECEIVED
} from './actions'

// REDUCERS
// Reducers specify how the application's state changes in response to actions sent to the store. 
const initialState = {
    selectedSummoner: {
        isLoading: false,
        data: null
    },
    matches: {
        isLoading: false,
        data: []
    },
    champions: {
        isLoading: false,
        data: null
    }
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case SUMMONER_REQUESTED:
            return {
                ...state,
                selectedSummoner: {
                    data: null,
                    isLoading: true
                },
                matches: {
                    ...state.matches,
                    data: []
                }
            }
        case SUMMONER_RECEIVED:
            return {
                ...state,
                selectedSummoner: {
                    data: action.summoner,
                    isLoading: false
                }
            }
        case REQUEST_SUMMONER_AND_MATCHLIST:
            return {
                selectedSummoner: {
                    isLoading: true,
                    data: null
                },
                matches: {
                    isLoading: true,
                    data: []
                }
            }
        case MATCHLIST_REQUESTED:
            return {
                ...state,
                matches: {
                    data: [],
                    isLoading: true
                }
            }
        case MATCHLIST_RECEIVED:
            return {
                ...state,
                matches: {
                    data: action.matchlist,
                    isLoading: false
                }
            }
        case CHAMPIONS_REQUESTED:
            return {
                ...state,
                champions: {
                    isLoading: true,
                    data: null
                }
            }
        case CHAMPIONS_RECEIVED:
            return {
                ...state,
                champions: {
                    isLoading: false,
                    data: action.champions
                }
            }
        default:
            return state
    }
}

export default reducer