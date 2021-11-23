import React from 'react'
import { useHistory } from 'react-router-dom'

const PlaceComponent = ({ place }) => {
	const history = useHistory()

	const onClick = () => {
		history.push(`/subplace/${place.id}`)
	}
	console.log(place)
	return (
		<div className='flip rounded-3xl overflow-hidden shadow-lg'>
			<div className='flip-content'>
				<div className='flip-front'>
					<img
						className='w-full h-3/4 object-cover'
						src={place.photo}
						alt='Sunset in the mountains'
					/>
					<div className='px-6 py-4'>
						<div className='font-bold text-2xl text-left mb-2'>
							{place.name}
						</div>
					</div>
				</div>
				<div className='flip-back'>
					<p className='text-black m-10 text-justify text-base'>
						{place.description}
					</p>
                    <button
						onClick={onClick}
						className='absolute rounded-l-3xl z-40 top-0 h-10 right-0 bg-redColor text-white px-7'>
						Explore
					</button>
					<div className='absolute bottom-0 w-full p-5 bg-dark backdrop-filter backdrop-blur-xl text-white'>
						<p className='text-base'>
							Nearest Airport Station is
							<span className='font-bold'>: {place.airport}</span>
						</p>
						<p className='text-base'>
							Nearest Railway Station is
							<span className='font-bold'>: {place.railwayStation}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlaceComponent
