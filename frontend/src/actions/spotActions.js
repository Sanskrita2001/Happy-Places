import {GET_ALL_SPOT_FAIL,
GET_ALL_SPOT_REQUEST,
GET_ALL_SPOT_SUCCESS,
GET_SINGLE_SPOT_FAIL,
GET_SINGLE_SPOT_REQUEST,
GET_SINGLE_SPOT_SUCCESS} from '../constants/spotConstants'
import axios from 'axios'

export const listSpots = (id) => async(dispatch) =>{
    try {
        dispatch({
            type: GET_ALL_SPOT_REQUEST
        })
        const {data} = await axios.get(`/api/v1/subplaces/${id}/spots`)
        dispatch({
            type: GET_ALL_SPOT_SUCCESS,
            payload: data.data
        })
    } catch (err) {
        dispatch({
            type: GET_ALL_SPOT_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

// export const GetSubPlace = (id) => async(dispatch) => {
//     try {
//         dispatch({
//             type: GET_SINGLE_SUBPLACE_REQUEST
//         })
//         const {data} = await axios.get(`/api/v1/subplaces/${id}`)
//         dispatch({
//             type: GET_SINGLE_SUBPLACE_SUCCESS,
//             payload: data
//         })
//     } catch (err) {
//         dispatch({
//             type: GET_SINGLE_SUBPLACE_FAIL,
//             payload: err.response && err.response.data.message ? err.response.data.message : err.message
//         })
//     }
// }