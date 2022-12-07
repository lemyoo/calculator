import {
    DISPLAY_NUMBERS
} from '../Types/AppTypes'

const initialState = {
    //lightMode: localStorage.getItem('theme') === 'false' ? false : true,
    displayNumber: ""
};

const AppReducers = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NUMBERS:
            return { ...state, displayNumber: action.payload.data };
        default:
            return state;
    }
};

export default AppReducers
