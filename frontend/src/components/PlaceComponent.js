import React from 'react'

const PlaceComponent = ({place}) => {
    return (
        <div className='text-3xl grid-flow-col gap-4'>
            {place.name}
        </div>
    )
}

export default PlaceComponent
