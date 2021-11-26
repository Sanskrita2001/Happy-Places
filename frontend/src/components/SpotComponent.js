import React from 'react'
import { useHistory } from 'react-router-dom'
const SpotComponent = ({ spot }) => {
	const history = useHistory()

	const onClickMap = () => {
		history.push(`/map?lat=${spot.location.coordinates[0]}&long=${spot.location.coordinates[1]}`)
	}
	return (
		<div className='flip rounded-3xl overflow-hidden shadow-lg'>
			<div className='flip-content'>
				<div className='flip-front'>
					<img
						className='w-full h-3/4 object-cover'
						src={spot.photo}
						alt='Sunset in the mountains'
					/>
					<div className='px-6 py-4'>
						<div className='font-bold text-2xl text-left mb-2'>
							{spot.name}
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
						{spot.description}
					</p>
                    {/* <button
						onClick={onClick}
						className='absolute z-40 top-0 h-10 right-0 bg-redColor text-white px-7'>
						Explore
					</button> */}
					<div className='absolute bottom-0 w-full p-5 bg-dark backdrop-filter backdrop-blur-xl text-white'>
						<p className='text-base'>
							The open hours are
							<span className='font-bold'>: {spot.openHours.start} to {spot.openHours.end}</span>
						</p>
						<p className='text-base'>
							The entry fees is
							<span className='font-bold'>: {spot.entryFee}</span>
						</p>
                        <p className='text-base'>
							The time that can be spent there is
							<span className='font-bold'>: {spot.minNoOfHrsVisit}</span>
						</p>
                        <p className='text-base'>
							The distance is
							<span className='font-bold'>: {spot.distance}</span>
						</p>
                        <p className='text-base'>
							The Transport available is
							<span className='font-bold'>: {spot.transport}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SpotComponent
