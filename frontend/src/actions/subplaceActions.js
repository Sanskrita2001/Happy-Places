import {
    GET_ALL_SUBPLACES_FAIL,
    GET_ALL_SUBPLACES_REQUEST,
    GET_ALL_SUBPLACES_SUCCESS,
    GET_SINGLE_SUBPLACE_FAIL,
    GET_SINGLE_SUBPLACE_REQUEST,
    GET_SINGLE_SUBPLACE_SUCCESS
} from '../constants/subPlaceConstants'
import axios from 'axios'

export const listSubPlaces = (id) => async(dispatch) =>{
    try {
        dispatch({
            type: GET_ALL_SUBPLACES_REQUEST
        })
        const {data} = await axios.get(`/api/v1/places/${id}/subplaces`)
        dispatch({
            type: GET_ALL_SUBPLACES_SUCCESS,
            payload: data.data
        })
    } catch (err) {
        dispatch({
            type: GET_ALL_SUBPLACES_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

export const GetSubPlace = (id) => async(dispatch) => {
    try {
        dispatch({
            type: GET_SINGLE_SUBPLACE_REQUEST
        })
        const {data} = await axios.get(`/api/v1/subplaces/${id}`)
        dispatch({
            type: GET_SINGLE_SUBPLACE_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: GET_SINGLE_SUBPLACE_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}