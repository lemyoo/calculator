import {
    DISPLAY_NUMBERS,
    CURRENT_NUMBER,
    ANSWER_DISPLAY,
    CHECK_POINT,
} from '../Types/AppTypes'

const initialState = {
    //lightMode: localStorage.getItem('theme') === 'false' ? false : true,
    currentNumber: "",
    displayValues: [],
    answer: 0,
    pointPresent: false,
};

const AppReducers = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NUMBERS:
            return { ...state, displayValues: action.payload.data };
        case CURRENT_NUMBER:
            return { ...state, currentNumber: action.payload.data };
        case ANSWER_DISPLAY:
            return { ...state, answer: action.payload.data };
        case CHECK_POINT:
            return { ...state, pointPresent: action.payload.data };
        default:
            return state;
    }
};

export default AppReducers
