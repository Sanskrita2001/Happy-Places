import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import PlaceScreen from './screens/PlaceScreen'
import SubPlace from './screens/SubPlace'

const App = () => {
	return (
		<Router>
			<Navbar/>	
				<Route exact path='/' component={HomeScreen}/>
				<Route exact path='/places' component={PlaceScreen}/>
				<Route exact path='/subplace/:id' component={SubPlace}/>
			<Footer/>
		</Router>
	)
}

export default App
