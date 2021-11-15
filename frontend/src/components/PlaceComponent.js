import React from 'react'

const PlaceComponent = ({place}) => {
    return (
        <div className='text-3xl'>
            {place.name}
        </div>
    )
}

export default PlaceComponent
