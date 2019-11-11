export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const SET_SURVEYDATA = 'SET_SURVEYDATA';

export function fetchDataPending(boolPending) {
    return {type: FETCH_DATA_PENDING, boolPending}
}

export function fetchDataError(error) {
    return {type: FETCH_DATA_ERROR, error}
}

export function setSurveyData(data) {
    return {type: SET_SURVEYDATA, data}
}

