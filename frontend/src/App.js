import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'

import HomeScreen from './screens/HomeScreen'

const App = () => {
	return (
		<Router>
			<Navbar/>	
			<Route exact path='/' component={HomeScreen}/>
		</Router>
	)
}

export default App
