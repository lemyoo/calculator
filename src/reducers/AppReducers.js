import {
    DISPLAY_NUMBERS,
    CURRENT_NUMBER,
} from '../Types/AppTypes'

const initialState = {
    //lightMode: localStorage.getItem('theme') === 'false' ? false : true,
    currentNumber: "",
    displayValues: []
};

const AppReducers = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NUMBERS:
            return { ...state, displayValues: action.payload.data };
        case CURRENT_NUMBER:
            return { ...state, currentNumber: action.payload.data }
        default:
            return state;
    }
};

export default AppReducers
