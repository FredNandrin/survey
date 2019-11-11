export const ANSWER_CLICKED = 'ANSWER_CLICKED';

export function onOptionClick(id) {
    console.log('clicked id : '+id);
    return {type: ANSWER_CLICKED, id}
}

