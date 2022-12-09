import { DISPLAY_NUMBERS, CURRENT_NUMBER, ANSWER_DISPLAY } from '../Types/AppTypes'

export const currentNumberAction = (data) => {
    return {
        type: CURRENT_NUMBER,
        payload: {
            data: data
        }
    }
}
export const displayNumberAction = (data) => {
    return {
        type: DISPLAY_NUMBERS,
        payload: {
            data: data
        }
    }
}
export const answerDisplayAction = (data) => {
    return {
        type: ANSWER_DISPLAY,
        payload: {
            data: data
        }
    }
}