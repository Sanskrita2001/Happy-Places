import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import Loader from '../components/Loader'
import Error from '../components/Error'

import {addOffbeatPlaces} from '../actions/offbeatAction'
const AddOffbeat = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const {loading, error, message} = userRegister

    const [place, setPlace] = useState({
        name: "",
        place: "",
        photo: "",
        description: "",
        nearestAirport: "",
        nearestRailwayStation: "",
        hotelAvailable: "few",
        rating: "",
        suggestedBy: ""
      });

    const onChange = (e) => setPlace({ ...place, [e.target.name]: e.target.value });
    const onSubmit = async(e) => {
      e.preventDefault()
      const formData = {
          name: place.name,
          place: place.place,
          photo: place.photo,
          description: place.description,
          nearestAirport: place.nearestAirport,
          nearestRailwayStation: place.nearestRailwayStation,
          hotelAvailable: place.hotelAvailable,
          rating: place.rating,
          suggestedBy: place.suggestedBy
      }
      dispatch(addOffbeatPlaces(formData))
    }
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    useEffect(()=>{
      if(message){
        history.push('/offbeat')
      }
    }, [userInfo, history])
    console.log(error)
    return (
      <div>
      {error && <Error variant='danger' message={error}/>}
      {loading && <Loader/>}
      <img className="home-bg-img" src="https://imgur.com/oeqleuG.png" alt="Home Backgroung Image" width="100%" height="100%" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/3 w-11/12 backdrop-filter backdrop-blur-lg rounded-3xl border-2 border-solid border-white z-10 bg-gradient-to-br from bg-grey-500 bg-opacity-60 to bg-grey-500 bg-opacity-5">
      <div className="text-center font-bold text-4xl mt-5">
        User Registration
      </div>
      <form className="py-4" onSubmit={onSubmit}>
        <div className="grid grid-flow-row md:grid-cols-2 md:grid-rows-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Name
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your name"
              name="name"
              value={place.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Place
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your job"
              name="place"
              value={place.place}
              onChange={onChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Photo
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your phone number"
              name="photo"
              value={place.photo}
              onChange={onChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Description
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your phone number"
              name="description"
              value={place.description}
              onChange={onChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Nearest Airport
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your phone number"
              name="nearestAirport"
              value={place.nearestAirport}
              onChange={onChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Nearest railway station
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your phone number"
              name="nearestRailwayStation"
              value={place.nearestRailwayStation}
              onChange={onChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Are hotels available?
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your phone number"
              name="hotelAvailable"
              value={place.hotelAvailable}
              onChange={onChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
            rating
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your phone number"
              name="rating"
              value={place.rating}
              onChange={onChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Your name?
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your phone number"
              name="suggestedBy"
              value={place.suggestedBy}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="flex">
          <div className="m-auto">
            <input
              type="submit"
              className="my-3 py-3 md:w-72 bg-dark text-white border-2 rounded-lg"
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </form>
    </div>
      </div>
      
    )
}

export default AddOffbeat
