import React, { useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listSubPlaces} from '../actions/subplaceActions'
import SubPlaceComponent from '../components/SubPlaceComponent'

import Loader from '../components/Loader'
import Error from '../components/Error'

const SubPlace = ({match}) => {
    const dispatch = useDispatch();
    const getAllSubPlaces = useSelector(state => state.getAllSubPlaces)
    const {subplaces, loading, error} = getAllSubPlaces

	const [filteredsubplace, setFilteredsubplace] = useState('')

    const id = match.params.id
    useEffect(()=>{
        dispatch(listSubPlaces(id))
    }, [dispatch, id])
	let filteredsp = subplaces.filter((item)=>(item.name.startsWith(filteredsubplace.charAt(0).toUpperCase()+filteredsubplace.slice(1))))
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
								className='border-2 border-gray-500 bg-white placeholder-lg placeholder-black opacity-80 h-14 mx-auto w-1/2 px-20 pr-16 rounded-lg text-sm focus:outline-none'
								type='search'
								name='search'
								placeholder='Search for places you wanna visit'
								value={filteredsubplace}
								onChange={(e)=>setFilteredsubplace(e.target.value)}
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
				{loading === true && <Loader />}
				{error && <Error message={error} />}
				{loading === false && !error && (
					<div className='absolute z-20 -top-32 p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-20'>
						{filteredsp.map((place) => (
							<SubPlaceComponent key={place.id} subplace={place} />
						))}
					</div>
				)}
                </section>
				
			</div>
		</>
    )
}

export default SubPlace
