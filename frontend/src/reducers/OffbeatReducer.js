import {ADD_OFFBEAT_SUCCESS,
ADD_OFFBEAT_REQUEST,
ADD_OFFBEAT_FAIL,
GET_OFFBEAT_FAIL,
GET_OFFBEAT_SUCCESS,
GET_OFFBEAT_REQUEST} from '../constants/offbeatConstant'


export const getOffbeatPlacesReducer = (state ={offbeatplaces: []}, action) => {
    switch(action.type){
        case GET_OFFBEAT_REQUEST:
            return {loading: true, offbeatplaces: []}
        case GET_OFFBEAT_SUCCESS:
            return {loading: false, offbeatplaces: action.payload}
        case GET_OFFBEAT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const addOffbeatPLacesReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_OFFBEAT_REQUEST:
            return {loading: true}
        case ADD_OFFBEAT_SUCCESS:
            return {loading: false, message: action.payload}
        case ADD_OFFBEAT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
