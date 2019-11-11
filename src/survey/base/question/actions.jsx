export const ANSWER_CLICKED = 'ANSWER_CLICKED';

export function onOptionClick(questionid,id) {
    return {type: ANSWER_CLICKED, questionid, answerid:id}
}

