import React from 'react'

const PlanComponent = ({plan}) => {
    return (
        <div>
            <div className='flip rounded-3xl overflow-hidden shadow-lg'>
			<div className='flip-content'>
				<div className='flip-front'>
					{/* <img
						className='w-full h-3/4 object-cover'
						src={spot.photo}
						alt='Sunset in the mountains'
					/> */}
					<div className='px-6 py-4'>
						<div className='font-bold text-2xl text-left mb-2'>
							{plan.location}
						</div>
					</div>
				</div>
				<div className='flip-back'>
					<p className='text-black m-10 text-justify text-base'>
						{plan.days}
					</p>
                    {/* <button
						onClick={onClick}
						className='absolute z-40 top-0 h-10 right-0 bg-redColor text-white px-7'>
						Explore
					</button> */}
					<div className='absolute bottom-0 w-full p-5 bg-dark backdrop-filter backdrop-blur-xl text-white'>
						<p className='text-base'>
							places are
							<span className='font-bold'>: {plan.places}</span>
						</p>
						<p className='text-base'>
							Starting date is
							<span className='font-bold'>: {plan.startingDate}</span>
						</p>
                        <p className='text-base'>
							Ending date is
							<span className='font-bold'>: {plan.endingDate}</span>
						</p>
                        <p className='text-base'>
							The plan is:
							<span className='font-bold'>: {plan.plan}</span>
						</p>

					</div>
				</div>
			</div>
		</div>
        </div>
    )
}

export default PlanComponent
