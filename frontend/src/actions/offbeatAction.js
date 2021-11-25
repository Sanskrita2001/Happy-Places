import {ADD_OFFBEAT_FAIL,
ADD_OFFBEAT_REQUEST,
ADD_OFFBEAT_SUCCESS,
GET_OFFBEAT_FAIL,
GET_OFFBEAT_REQUEST,
GET_OFFBEAT_SUCCESS} from '../constants/offbeatConstant'
import axios from 'axios'

export const listOffbeatPlaces = () => async(dispatch) =>{
    try {
        dispatch({
            type: GET_OFFBEAT_REQUEST
        })
        const {data} = await axios.get('/api/v1/offbeat')
        dispatch({
            type: GET_OFFBEAT_SUCCESS,
            payload: data.data
        })
    } catch (err) {
        dispatch({
            type: GET_OFFBEAT_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

export const addOffbeatPlaces = (formData) => async(dispatch) => {
    try {
        dispatch({
            type: ADD_OFFBEAT_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/v1/offbeat', formData, config)
        dispatch({
            type: ADD_OFFBEAT_SUCCESS,
            payload: data.success
        })
    } catch (err) {
        dispatch({
            type: ADD_OFFBEAT_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}