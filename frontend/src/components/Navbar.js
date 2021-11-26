import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import {logout}from '../actions/userActions'
import {useDispatch} from 'react-redux'
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const user = JSON.parse(localStorage.getItem('userInfo'))
	const dispatch = useDispatch()
	const logoutFunc = () => {
		dispatch(logout())
	}
	return (
		<>
			<nav className='p-5 bg-dark fixed w-full z-30 top-0'>
				<div className='flex flex-col md:flex-row justify-end text-white'>
					<div className='flex-shrink-0 mr-auto'>
						<img
							className='h-8 '
							src='https://imgur.com/S8Qjcw1.png'
							alt='Happy Places'
						/>
					</div>
					<div className='mr-2 flex'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							type='button'
							className='bg-darkblue inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
							aria-controls='menu'
							aria-expanded='false'>
							<span className='sr-only'>Open main menu</span>
							{!isOpen ? (
								<svg
									className='block h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							) : (
								<svg
									className='block h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter='transition ease-out duration-100 transform'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='transition ease-in duration-75 transform'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'>
					{(ref) => (
						<div id='menu'>
							<div
								ref={ref}
								className='text-center px-5 pt-5 pb-3 space-y-1 sm:px-3'>
								<Link
									className='text-white block px-3 py-2 rounded-md text-base font-medium font-sans'
									to='/'>
									Home
								</Link>

								<Link
									className='text-white block px-3 py-2 rounded-md text-base font-medium font-sans'
									to='/places'>
									Places
								</Link>

								<Link
									className='text-white block px-3 py-2 rounded-md text-base font-medium font-sans'
									to='/subplace/:id'>
									Sub Places
								</Link>

								<Link
									className='text-white block px-3 py-2 rounded-md text-base font-medium font-sans'
									to='/offbeat'>
									Offbeat
								</Link>

                                {user&&<Link
									className='text-white block px-3 py-2 rounded-md text-base font-medium font-sans'
									to='/plan'>
									Plan
								</Link>}
								{user&&<Link
									className='text-white block px-3 py-2 rounded-md text-base font-medium font-sans'
									to='/addplan'>
									AddPlan
								</Link>}

								{user && <Link
									className='text-white block px-3 py-2 rounded-md text-base font-medium font-sans'
                                    to='/' onClick={logoutFunc}>
									Logout
								</Link>}

								{!user && <Link
									className='text-white block px-3 py-2 rounded-md text-base font-medium font-sans'
                                    to='/register'>
									Register
								</Link>}

								{!user && <Link
									className='text-white block px-3 py-2 rounded-md text-base font-medium font-sans'
                                    to='/login'>
									Login
								</Link>}

								{/* <Link
									href='#'
									className='text-white block px-3 py-2 rounded-md text-base font-medium font-sans' to='/signup'>
									Register
								</Link> */}
							</div>
						</div>
					)}
				</Transition>

				{/* <Link className='mr-2' to='/'>
					Login
				</Link>
				<Link className='mx-auto' to='/about'>
					Sign Up
				</Link> */}
			</nav>
		</>
	)
}

export default Navbar
