import {FETCH_DATA_ERROR, FETCH_DATA_PENDING, SET_SURVEYDATA} from './actions'
import {ANSWER_CLICKED} from "./question/actions";

const initState = {
    pending: true,
    error: null,
    eligible: false,
    data:{},
    answers:{}
}

export function questionReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_DATA_PENDING:
            return {...state, pending: action.boolPending}
        case FETCH_DATA_ERROR:
            return {...state, pending: false, error: action.error}
        case SET_SURVEYDATA:
            return {...state, data: action.data}
        case ANSWER_CLICKED:
            var answers= state.answers;
            answers[action.questionid]=action.answerid;
            var data= state.data;
            data.survey[action.questionid].customerChoice=action.answerid;
            return {...state, answers,data}
        default:
            return state
    }
}

