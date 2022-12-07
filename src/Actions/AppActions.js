import { DISPLAY_NUMBERS } from '../Types/AppTypes'

export const addNumberToDisplay = (data) => {
    return {
        type: DISPLAY_NUMBERS,
        payload: {
            data: data
        }
    }
}