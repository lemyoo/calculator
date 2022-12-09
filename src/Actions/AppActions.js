import { DISPLAY_NUMBERS, CURRENT_NUMBER, ANSWER_DISPLAY, CHECK_POINT } from '../Types/AppTypes'

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
export const pointPresentAction = (data) => {
    return {
        type: CHECK_POINT,
        payload: {
            data: data
        }
    }
}