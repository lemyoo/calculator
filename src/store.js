import { configureStore } from '@reduxjs/toolkit'

import AppReducers from './reducers/AppReducers'

const store = configureStore({
    reducer:
    {
        app: AppReducers,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
});

export default store;