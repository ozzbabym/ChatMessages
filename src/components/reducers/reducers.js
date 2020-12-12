import { applyMiddleware, combineReducers, createStore } from "redux"
import {MessageReducer} from '../chatReducer'
import {reducerHeader} from '../Header/reducerHeader'
import {reducer as formReducer} from 'redux-form'
import {reducerStateName} from '../Header/reducerStateName'
import ThunkMiddleware from 'redux-thunk'



const reducers = combineReducers({
    MessageReducer,
    reducerHeader,
    reducerStateName,
    form: formReducer
    
})

export const Store = createStore(reducers, applyMiddleware(ThunkMiddleware))