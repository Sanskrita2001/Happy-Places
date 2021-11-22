import {
    GET_ALL_SUBPLACES_FAIL,
    GET_ALL_SUBPLACES_REQUEST,
    GET_ALL_SUBPLACES_SUCCESS,
    GET_SINGLE_SUBPLACE_FAIL,
    GET_SINGLE_SUBPLACE_REQUEST,
    GET_SINGLE_SUBPLACE_SUCCESS
} from '../constants/subPlaceConstants'

export const getSubPlacesReducer = (state ={subplaces: []}, action) => {
    switch(action.type){
        case GET_ALL_SUBPLACES_REQUEST:
            return {loading: true, subplaces: []}
        case GET_ALL_SUBPLACES_SUCCESS:
            return {loading: false, subplaces: action.payload}
        case GET_ALL_SUBPLACES_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const getSingleSubPlaceReducer = (state={subplace: {}}, action) => {
    switch(action.type){
        case GET_SINGLE_SUBPLACE_REQUEST:
            return {loading: true, subplace: {}}
        case GET_SINGLE_SUBPLACE_SUCCESS:
            return {loading: false, subplace: action.payload}
        case GET_SINGLE_SUBPLACE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}