import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import {getPlacesReducer, getSinglePlaceReducer} from './reducers/placeReducer'
import {getSingleSubPlaceReducer, getSubPlacesReducer} from './reducers/subPlaceReducer'

const reducer = combineReducers({
      getAllPlaces: getPlacesReducer,
      getSinglePlace: getSinglePlaceReducer,
      getAllSubPlaces: getSubPlacesReducer,
      getSingleSubPlace: getSingleSubPlaceReducer
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