import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { RootState } from '../types'

import CardsReducer from './reducers/CardsReducer'
import FilterReducer from './reducers/FilterReducer'
import { DeleteReducer } from './reducers/DeleteReducer'


const reducer = combineReducers<RootState>({
    card: CardsReducer,
    filter: FilterReducer,
    delete: DeleteReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store