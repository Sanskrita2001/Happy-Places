import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {listPlaces} from '../actions/placeActions'

import Loader from '../components/Loader'
import Error from '../components/Error'
import PlaceComponent from '../components/PlaceComponent'

const PlaceScreen = () => {

    const dispatch = useDispatch()
    const getAllPlaces = useSelector(state => state.getAllPlaces)
    const {places, loading, error} = getAllPlaces


    useEffect(()=>{
        dispatch(listPlaces())
    }, [dispatch])
    return (
        <>
            <div className="place-background">
            <div class="p-8">
            <div class="bg-white flex items-center rounded-full shadow-xl">
                <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
                <div class="p-4">
                    <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center" >
                         <i class="fas fa-search"></i>
                    </button>
                </div> 
            </div>
            </div>
            </div>
            {loading===true && <Loader/>}
            {error && <Error message={error}/>}
            {loading=== false && !error && (
                <div className="h-64 grid grid-rows-3 container mx-auto my-5">
                    {places.map(place => <PlaceComponent place={place}/>)}
                </div>
            )}
        </>
    )
}

export default PlaceScreen