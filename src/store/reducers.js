import { SUMMONER_REQUESTED, SUMMONER_RECEIVED} from './actions'

// REDUCERS
// Reducers specify how the application's state changes in response to actions sent to the store. 
const initialState = {
    selectedSummoner: null,
    matchListReference: [],
    matchListDetail: [],
    matchListTimeLine: [],
    isLoading: false
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case SUMMONER_REQUESTED:
            return {
                ...state,
                isLoading: true
            }
        case SUMMONER_RECEIVED:
            return {
                ...state,
                selectedSummoner: action.summoner,
                isLoading: false
            }
        default:
            return state
    }
}

export default reducer