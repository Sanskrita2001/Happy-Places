import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { listPlaces } from '../actions/placeActions'

import Loader from '../components/Loader'
import Error from '../components/Error'
import PlaceComponent from '../components/PlaceComponent'

const PlaceScreen = () => {
	const dispatch = useDispatch()
	const getAllPlaces = useSelector((state) => state.getAllPlaces)
	const { places, loading, error } = getAllPlaces

	useEffect(() => {
		dispatch(listPlaces())
	}, [dispatch])

	if (places !== undefined) {
		console.log(places)
	}
	return (
		<>
			<div className='main-container'>
				<section className='one relative'>
					<img
						className='home-bg-img'
						src='https://imgur.com/IioV4Cr.png'
						alt='Home Backgroung Image'
						width='100%'
						height='100%'
					/>
					<div className='mt-20'>
						<div className='absolute z-20 top-20 w-full flex items-center rounded-full '>
							<input
								className='border-2 border-gray-500 bg-white placeholder-black opacity-80 h-14 mx-auto w-1/2 px-20 pr-16 rounded-lg text-sm focus:outline-none'
								type='search'
								name='search'
								placeholder='Search for places you wanna visit'
							/>
							<div className='p-4'>
								<button className='text-black rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center'>
									<i className='absolute left-2/3 fas fa-search'></i>
								</button>
							</div>
						</div>
					</div>
				</section>
                <section className='two relative -mt-20'>
                <img
						className='home-bg-img'
						src='https://imgur.com/vsODICs.png'
						alt='Map Backgroung Image'
						width='100%'
						height='100%'
				/>
                </section>
				{loading === true && <Loader />}
				{error && <Error message={error} />}
				{loading === false && !error && (
					<div className='h-64 grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto my-5'>
						{places.map((place) => (
							<PlaceComponent key={place.id} place={place} />
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default PlaceScreen
