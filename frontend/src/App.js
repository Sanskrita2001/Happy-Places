import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import PlaceScreen from './screens/PlaceScreen'
import SubPlace from './screens/SubPlace'
import SpotScreen from './screens/SpotScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import OffbearScreen from './screens/OffbearScreen'
import AddOffbeat from './screens/AddOffbeat'

import { useHistory } from 'react-router-dom'

const AuthRoutes = () => {
	const history = useHistory();
  
	useEffect(() => {
	  history.push("/login");
	}, []);
  
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
	// const token = user.token
	// if(token){
	// 	return(
	// 		<Router>
	// 			<Navbar/>
	// 			<Route exact path='/addoffbeat' component={AddOffbeat}/>
	// 		</Router>
	// 	)
	// }
	return (
		<Router>
			<Navbar/>	
				<Route exact path='/' component={HomeScreen}/>
				<Route exact path='/places' component={PlaceScreen}/>
				<Route exact path='/subplace/:id' component={SubPlace}/>
				<Route exact path='/spots/:id' component={SpotScreen}/>
				<Route exact path='/register' component={RegisterScreen}/>
				<Route exact path='/login' component={LoginScreen}/>
				<Route exact path='/offbeat' component={OffbearScreen}/>
				{user?<Route exact path='/addoffbeat' component={AddOffbeat}/> : <AuthRoutes/>}
			<Footer/>
		</Router>
	)
}

export default App
