import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import {getPlacesReducer, getSinglePlaceReducer} from './reducers/placeReducer'
import {getSingleSubPlaceReducer, getSubPlacesReducer} from './reducers/subPlaceReducer'
import {getSpotsReducer} from './reducers/spotReducer'
import {userRegisterReducer, sendOtpReducer, userVerifyReducer} from './reducers/userReducer'
import {getOffbeatPlacesReducer, addOffbeatPLacesReducer} from './reducers/OffbeatReducer'
import {getPlanReducer, addPlanReducer} from './reducers/planReducer'

const reducer = combineReducers({
      getAllPlaces: getPlacesReducer,
      getSinglePlace: getSinglePlaceReducer,
      getAllSubPlaces: getSubPlacesReducer,
      getSingleSubPlace: getSingleSubPlaceReducer,
      getSpots: getSpotsReducer,
      userRegister: userRegisterReducer,
      sendOtp: sendOtpReducer,
      userVerify: userVerifyReducer,
      getOffbeatPlaces: getOffbeatPlacesReducer,
      addOffbeatPLaces: addOffbeatPLacesReducer,
      getPlan: getPlanReducer,
      addPlan: addPlanReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
export default store