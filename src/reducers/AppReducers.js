import {
    DISPLAY_NUMBERS,
    CURRENT_NUMBER,
    ANSWER_DISPLAY,
} from '../Types/AppTypes'

const initialState = {
    //lightMode: localStorage.getItem('theme') === 'false' ? false : true,
    currentNumber: "",
    displayValues: [],
    answer: 123
};

const AppReducers = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NUMBERS:
            return { ...state, displayValues: action.payload.data };
        case CURRENT_NUMBER:
            return { ...state, currentNumber: action.payload.data };
        case ANSWER_DISPLAY:
            return { ...state, answer: action.payload.data };
        default:
            return state;
    }
};

export default AppReducers
