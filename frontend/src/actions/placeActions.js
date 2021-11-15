import {GET_ALL_PLACES_FAIL, 
GET_ALL_PLACES_REQUEST, 
GET_ALL_PLACES_SUCCESS, 
GET_SINGLE_PLACE_REQUEST, 
GET_SINGLE_PLACE_SUCCESS, 
GET_SINGLE_PLACE_FAIL} from '../constants/placeConstants'
import axios from 'axios'

export const listPlaces = () => async(dispatch) =>{
    try {
        dispatch({
            type: GET_ALL_PLACES_REQUEST
        })
        const {data} = await axios.get('/api/v1/places')
        dispatch({
            type: GET_ALL_PLACES_SUCCESS,
            payload: data.data
        })
    } catch (err) {
        dispatch({
            type: GET_ALL_PLACES_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

export const GetPlace = (id) => async(dispatch) => {
    try {
        dispatch({
            type: GET_SINGLE_PLACE_REQUEST
        })
        const {data} = await axios.get(`/api/v1/places/${id}`)
        dispatch({
            type: GET_SINGLE_PLACE_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: GET_SINGLE_PLACE_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}