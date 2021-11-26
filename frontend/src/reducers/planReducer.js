import {GET_PLAN_FAIL, GET_PLAN_SUCCESS, GET_PLAN_REQUEST,
ADD_PLAN_FAIL, ADD_PLAN_SUCCESS, ADD_PLAN_REQUEST} from '../constants/planConstants'

export const getPlanReducer = (state ={plans: []}, action) => {
    switch(action.type){
        case GET_PLAN_REQUEST:
            return {loading: true, plans: []}
        case GET_PLAN_SUCCESS:
            return {loading: false, plans: action.payload}
        case GET_PLAN_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const addPlanReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_PLAN_REQUEST:
            return {loading: true}
        case ADD_PLAN_SUCCESS:
            return {loading: false, data: action.payload}
        case ADD_PLAN_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}