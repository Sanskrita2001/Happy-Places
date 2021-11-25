import {ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL,
SEND_OTP_FAIL,
SEND_OTP_REQUEST,
SEND_OTP_SUCCESS,
VERIFY_USER_FAIL,
VERIFY_USER_REQUEST,
VERIFY_USER_SUCCESS, USER_LOGOUT} from '../constants/userConstants'
import axios from 'axios'

export const register = (name, email, phone) => async(dispatch) => {
    try {
       dispatch({
           type: ADD_USER_REQUEST
       }) 

       const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const {data} = await axios.post('/api/v1/auth', {name, email, phone}, config)

    dispatch({
        type: ADD_USER_SUCCESS,
        payload: data.message
    })
    } catch (err) {
        dispatch({
            type: ADD_USER_FAIL,
            payload: err.message
        })
    }
}

export const sendOtpFunc = (phone) => async(dispatch) => {
    try {
        dispatch({
            type: SEND_OTP_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/v1/auth/login', {phone}, config)
        dispatch({
            type: SEND_OTP_SUCCESS,
            payload: data.message
        })
    } catch (err) {
        console.log(err)
            dispatch({
                type: SEND_OTP_FAIL,
                payload: err.response && err.response.data.message ? err.response.data.message : err.message
            })
    }
}

export const verifyOtp = (phone, otp) => async(dispatch) => {
    try {
        dispatch({
            type: VERIFY_USER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/v1/auth/verify', {phone, otp}, config)
        localStorage.setItem('userInfo', JSON.stringify(data))
        dispatch({
            type: VERIFY_USER_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err)
            dispatch({
                type: VERIFY_USER_FAIL,
                payload: err.response && err.response.data.message ? err.response.data.message : err.message
            })
    }
}

export const logout = () => async(dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT
    })
}