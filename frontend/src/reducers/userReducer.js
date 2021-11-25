import {ADD_USER_FAIL, ADD_USER_SUCCESS, ADD_USER_REQUEST,
SEND_OTP_REQUEST, SEND_OTP_SUCCESS, SEND_OTP_FAIL,
VERIFY_USER_FAIL, VERIFY_USER_SUCCESS, VERIFY_USER_REQUEST, USER_LOGOUT} from '../constants/userConstants'

export const userVerifyReducer = (state={}, action) => {
    switch (action.type) {
        case VERIFY_USER_REQUEST:
            return {loading: true}
        case VERIFY_USER_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case VERIFY_USER_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_USER_REQUEST:
            return {loading: true}
        case ADD_USER_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case ADD_USER_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const sendOtpReducer = (state={}, action) => {
    switch(action.type){
        case SEND_OTP_REQUEST:
            return {loading: true}
        case SEND_OTP_SUCCESS:
            return {loading: false, message: action.payload}
        case SEND_OTP_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}