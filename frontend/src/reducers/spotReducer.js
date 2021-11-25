import {GET_ALL_SPOT_FAIL, GET_ALL_SPOT_REQUEST, GET_ALL_SPOT_SUCCESS} from '../constants/spotConstants'


export const getSpotsReducer = (state ={spots: []}, action) => {
    switch(action.type){
        case GET_ALL_SPOT_REQUEST:
            return {loading: true, spots: []}
        case GET_ALL_SPOT_SUCCESS:
            return {loading: false, spots: action.payload}
        case GET_ALL_SPOT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
