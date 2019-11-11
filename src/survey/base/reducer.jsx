import {FETCH_DATA_ERROR, FETCH_DATA_PENDING, SET_SURVEYDATA} from './actions'

const initState = {
    pending: true,
    error: null,
    eligible: false,
    data:{}
}

export function dataFetching(state = initState, action) {
    switch (action.type) {
        case FETCH_DATA_PENDING:
            return {...state, pending: action.boolPending}
        case FETCH_DATA_ERROR:
            return {...state, pending: false, error: action.error}
        case SET_SURVEYDATA:
            return {...state, data: action.data}
        default:
            return state
    }
}

