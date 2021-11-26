import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {GetPlace} from '../actions/placeActions'
import {useDispatch, useSelector} from 'react-redux'

const SubPlaceComponent = ({subplace}) => {
	const history = useHistory()
    const dispatch = useDispatch();
    const getSinglePlace = useSelector(state => state.getSinglePlace)
    const {place, loading, error} = getSinglePlace
    const id = subplace.place
    useEffect(()=>{
        dispatch(GetPlace(id))
    }, [id, dispatch])
    if(!loading && !error){
        console.log(place)
    }
	const onClick = () => {
		history.push(`/spots/${subplace.id}`)
	}
	const onClickMap = () => {
		history.push(`/map?lat=${subplace.location.coordinates[0]}&long=${subplace.location.coordinates[1]}`)
	}
	console.log(subplace)

	return (
		<div className='flip rounded-3xl overflow-hidden shadow-lg'>
			<div className='flip-content'>
				<div className='flip-front'>
					<img
						className='w-full h-3/4 object-cover'
						src={subplace.photo}
						alt='Sunset in the mountains'
					/>
					<div className='px-6 py-4'>
						<div className='font-bold text-2xl text-left mb-2'>
							{subplace.name}
						</div>
					</div>
				</div>
				<div className='flip-back'>
				<button
						onClick={onClickMap}
						className='absolute z-40 top-0 h-10 left-0 bg-redColor text-white px-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fill-rule='evenodd'
								d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
								clip-rule='evenodd'
							/>
						</svg>
					</button>
					<p className='text-black m-10 text-justify text-base'>
						{subplace.description}
					</p>
                    <button
						onClick={onClick}
						className='absolute z-40 top-0 h-10 right-0 bg-redColor text-white px-7'>
						Explore
					</button>
					<div className='absolute bottom-0 w-full p-5 bg-dark backdrop-filter backdrop-blur-xl text-white'>
						<p className='text-base'>
							The transport available are
							<span className='font-bold'>: {subplace.transport}</span>
						</p>
						{place!=={}&& <p className='text-base'>
							The distance from {place.name}is
							<span className='font-bold'>: {subplace.distance}</span>
						</p>}
                        <p className='text-base'>
							Minimum number of stay required
							<span className='font-bold'>: {subplace.minNoOfDaysStay}</span>
						</p>
                        <p className='text-base'>
							The seasonal timing is
							<span className='font-bold'>: {subplace.seasonalTiming}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SubPlaceComponent
