import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listSubPlaces} from '../actions/subplaceActions'

import Loader from '../components/Loader'
import Error from '../components/Error'
import SubPlaceComponent from '../components/SubPlaceComponent'

const SubPlace = ({match}) => {
    const dispatch = useDispatch();
    const getAllSubPlaces = useSelector(state => state.getAllSubPlaces)
    const {subplaces, loading, error} = getAllSubPlaces

    const id = match.params.id
    useEffect(()=>{
        dispatch(listSubPlaces(id))
    }, [dispatch, id])
    return (
        <>
            This is a subplace
            {loading===true && <Loader/>}
            {error && <Error message={error}/>}
            {loading=== false && !error && (
                <div className="h-64 grid grid-cols-1 md:grid-cols-3 gap-4 container mt-80">
                    {subplaces.map(place => <div>{place.name}</div>)}
                </div>
            )}
        </>
    )
}

export default SubPlace
