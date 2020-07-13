import { 
    SUMMONER_REQUESTED, 
    SUMMONER_RECEIVED,
    MATCHLIST_REQUESTED, 
    MATCHLIST_RECEIVED
} from './actions'

// REDUCERS
// Reducers specify how the application's state changes in response to actions sent to the store. 
const initialState = {
    selectedSummoner: {
        isLoading: false,
        data: null
    },
    matchListReference: {
        isLoading: false,
        data: []
    },
    matchListDetail: {
        isLoading: false,
        data: []
    },
    matchListTimeLine: {
        isLoading: false,
        data: []
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
                matchListReference: {
                    data: [],
                    isLoading: true
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
        case MATCHLIST_REQUESTED:
            return {
                ...state,
                matchListReference: {
                    data: [],
                    isLoading: true
                }
            }
        case MATCHLIST_RECEIVED:
            return {
                ...state,
                matchListReference: {
                    data: action.matchlist,
                    isLoading: false
                }
            }
        default:
            return state
    }
}

export default reducer