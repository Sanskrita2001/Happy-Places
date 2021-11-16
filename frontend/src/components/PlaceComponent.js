import React from 'react'

const PlaceComponent = ({place}) => {
    console.log(place)
    return (
        <div className='text-3xl text-center border-4 border-gray-800 rounded-md'>
            <img className="w-full" src={place.photo} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{place.name}</div>
                <p className="text-gray-700 text-base">
                    {place.description}
                </p>
            </div>
            <div className="grid grid-cols-2">
                <p className="text-gray-700 text-base">Nearest airport is<span className='font-bold'>: {place.airport}</span></p>
                <p className="text-gray-700 text-base">Nearest railway station is<span className='font-bold'>: {place.railwayStation}</span></p>
            </div>
        </div>
    )
}

export default PlaceComponent
