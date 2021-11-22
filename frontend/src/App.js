import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'

import HomeScreen from './screens/HomeScreen'
import PlaceScreen from './screens/PlaceScreen'
import SubPlace from './screens/SubPlace'

const App = () => {
	return (
		<Router>
			<main>
			<Navbar/>	
				<Route exact path='/' component={HomeScreen}/>
				<Route exact path='/places' component={PlaceScreen}/>
				<Route exact path='/subplace/:id' component={SubPlace}/>
			</main>
			{/* <Footer/> */}
		</Router>
	)
}

export default App
