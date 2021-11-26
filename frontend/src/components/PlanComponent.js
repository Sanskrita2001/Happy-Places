import React from 'react'

const PlanComponent = ({plan}) => {
    return (
        <div>
            <div className='flip rounded-3xl overflow-hidden shadow-lg'>
			<div>	
				<div>
					<div className='absolute bottom-0 w-full p-5 bg-dark backdrop-filter backdrop-blur-xl text-white'>
                        <p className='text-base'>
							The total number of days are:
							<span className='font-bold'>: {plan.days}</span>
						</p>
                        
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
