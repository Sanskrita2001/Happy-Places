import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import PlaceScreen from './screens/PlaceScreen'

const App = () => {
	return (
		<Router>
			<main>
			<Navbar/>	
				<Route exact path='/' component={HomeScreen}/>
				<Route exact path='/places' component={PlaceScreen}/>
			</main>
			<Footer/>
		</Router>
	)
}

export default App
