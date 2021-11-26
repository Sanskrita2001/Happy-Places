import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Map from "./components/Map"

import HomeScreen from './screens/HomeScreen'
import PlaceScreen from './screens/PlaceScreen'
import SubPlace from './screens/SubPlace'
import SpotScreen from './screens/SpotScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import OffbearScreen from './screens/OffbearScreen'
import AddOffbeat from './screens/AddOffbeat'
import AddPlannerScreen from './screens/AddPlannerScreen'

import GetPlanScreen from './screens/GetPlanScreen'

const AuthRoutes = () => {
	return (
	  <>
		<Router>
		  <Route exact path="/register" element={<RegisterScreen />} />
		  <Route exact path="/login" element={<LoginScreen />} />
		</Router>
	  </>
	);
  };
const App = () => {
	const user = JSON.parse(localStorage.getItem('userInfo'))
	return (
		<Router>
			<Navbar/>	
				<Route exact path='/' component={HomeScreen}/>
				<Route exact path='/map' component={Map}/>
				<Route exact path='/places' component={PlaceScreen}/>
				<Route exact path='/subplace/:id' component={SubPlace}/>
				<Route exact path='/spots/:id' component={SpotScreen}/>
				<Route exact path='/register' component={RegisterScreen}/>
				<Route exact path='/login' component={LoginScreen}/>
				<Route exact path='/offbeat' component={OffbearScreen}/>
				{user?<Route exact path='/addoffbeat' component={AddOffbeat}/> : <AuthRoutes/>}
				{user?<Route exact path='/addplan' component={AddPlannerScreen}/> : <AuthRoutes/>}
				{user?<Route exact path='/plan' component={GetPlanScreen}/> : <AuthRoutes/>}

			<Footer/>
		</Router>
	)
}

export default App
