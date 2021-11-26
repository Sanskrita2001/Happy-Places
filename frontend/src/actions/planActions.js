import {ADD_PLAN_FAIL, ADD_PLAN_REQUEST, ADD_PLAN_SUCCESS,
GET_PLAN_FAIL, GET_PLAN_REQUEST, GET_PLAN_SUCCESS} from '../constants/planConstants'
import axios from 'axios';

export const addPlanF = (location, days, places, startingDate, endingDate, plan) => async(dispatch) => {
    try {
       dispatch({
           type: ADD_PLAN_REQUEST
       }) 

       const userInfo = JSON.parse(localStorage.getItem('userInfo'))
       const user = userInfo.userId
       const token = userInfo.token
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    const {data} = await axios.post('/api/v1/plan', {location, days, places, startingDate, endingDate, plan, user}, config)

    dispatch({
        type: ADD_PLAN_SUCCESS,
        payload: data.data
    })
    } catch (err) {
        dispatch({
            type: ADD_PLAN_FAIL,
            payload: err.message
        })
    }
}

export const getPlanF = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_PLAN_REQUEST
        }) 
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        const token = userInfo.token
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const {data} = await axios.get('/api/v1/plan', config)
        dispatch({
            type: GET_PLAN_SUCCESS,
            payload: data.data
        })
    } catch (err) {
        dispatch({
            type: GET_PLAN_FAIL,
            payload: err.message
        })
    }
}