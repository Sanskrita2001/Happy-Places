import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import {getPlacesReducer} from './reducers/placeReducer'

const reducer = combineReducers({
      getAllPlaces: getPlacesReducer
})

const initialState = {
    
}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
export default store