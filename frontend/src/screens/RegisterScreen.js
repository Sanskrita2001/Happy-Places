import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import Loader from '../components/Loader'
import Error from '../components/Error'

import {register} from '../actions/userActions'
const RegisterScreen = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const {loading, error, userInfo} = userRegister

    const [users, setUsers] = useState({
        name: "",
        email: "",
        phone: "",
      });

    const onChange = (e) => setUsers({ ...users, [e.target.name]: e.target.value });
    const onSubmit = async(e) => {
      e.preventDefault()
      dispatch(register(users.name, users.email, users.phone))
    }
    useEffect(()=>{
      if(userInfo){
        history.push('/login')
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
              value={users.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Email
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your job"
              name="email"
              value={users.email}
              onChange={onChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Phone
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your phone number"
              name="phone"
              value={users.phone}
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
            />
          </div>
        </div>
      </form>
    </div>
      </div>
      
    )
}

export default RegisterScreen
