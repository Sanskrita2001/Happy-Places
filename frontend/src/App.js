import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
					<p className='text-xl font-medium text-black'>Henlo</p>
					<p class='text-gray-500'>You have a new message!</p>
				</div>
			</header>
		</div>
	);
}

export default App;
