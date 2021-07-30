import {GET_ALL_PLACES_FAIL, 
GET_ALL_PLACES_SUCCESS, 
GET_ALL_PLACES_REQUEST} from '../constants/placeConstants'

export const getPlacesReducer = (state ={places: []}, action) => {
    switch(action.type){
        case GET_ALL_PLACES_REQUEST:
            return {loading: true, places: []}
        case GET_ALL_PLACES_SUCCESS:
            return {loading: false, places: action.payload}
        case GET_ALL_PLACES_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}