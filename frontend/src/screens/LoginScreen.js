import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {sendOtpFunc, verifyOtp} from '../actions/userActions'
import { useHistory } from 'react-router-dom'

import Loader from '../components/Loader'

const LoginScreen = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [phno, setPhno] = useState("");
    const [otp, setOtp] = useState("");

    const sendOtp = useSelector(state => state.sendOtp)
    const userVerify = useSelector(state=>state.userVerify)

    const {loading, error, message} = sendOtp

    const sendOtpHandler = (e) => {
        e.preventDefault();
        dispatch(sendOtpFunc(phno))
      };
    
      const loginUser = (e) => {
        e.preventDefault();
        dispatch(verifyOtp(phno, otp))
      };

      useEffect(()=>{
        if(userVerify.userInfo){
          history.push('/places')
        }
      }, [userVerify.userInfo, history])
    return (
        <div>
            <div className="min-h-screen">
      <div className="bg-gray-200 my-24 mx-16 border-4 border-gray-900 rounded-lg  text-blue-900">
        <h1 className="text-center font-bold my-5">Please Login to Continue</h1>
        {error && (
          <p className="text-red-500 font-bold text-center">Phone number doesnt exist or is invalid</p>
        )}
        <div className="p-6">
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Please enter your Phone number
            </label>
            <div className="flex">
              <input
                type="text"
                className="p-3 m-3 border-2 border-gray-900 rounded-lg w-4/5"
                value={phno}
                onChange={(e) => setPhno(e.target.value)}
              />
              <button
                onClick={sendOtpHandler}
                className="w-1/5 bg-yellow-400 m-3 border-2 border-white rounded-lg"
              >
                SEND OTP
              </button>
              {loading && <Loader/>}
            </div>
            {message && (
              <div className="text-green-500 ml-4 font-bold">
                Otp sent at {phno}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Please enter the otp sent
            </label>
            <div className="flex">
              <input
                type="text"
                className="p-3 m-3 border-2 border-gray-900 rounded-lg w-3/5"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <div className="w-1/5 mt-8 ml-8 font-bold text-lg">
                Did not receive an OTP?
              </div>
              <button
                // onClick={sendOtp}
                className="text-white font-bold w-1/5 bg-blue-600 m-3 border-2 border-white rounded-lg"
              >
                Resend
              </button>
            </div>
          </div>
          {userVerify.loading && <Loader/>}
          {userVerify.error && <h1>Some error occured</h1>}
          <button
            onClick={loginUser}
            className="mt-8 w-full bg-blue-800 text-white font-bold p-4 border-2 border-white rounded-lg text-xl"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
        </div>
    )
}

export default LoginScreen
