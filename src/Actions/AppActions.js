import { DISPLAY_NUMBERS, CURRENT_NUMBER } from '../Types/AppTypes'

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