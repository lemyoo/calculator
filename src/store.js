import { configureStore } from '@reduxjs/toolkit'

import AppReducers from './reducers/AppReducers'
//import DataReducers from './reducers/DataReducers'
//import BackendReducers from './reducers/BackendReducers'
//import OPCUAReducers from './reducers/OPCUAReducers'

const store = configureStore({
    reducer:
    {
        app: AppReducers,
        //data: DataReducers,
        //opc: OPCUAReducers
    }
});

export default store;