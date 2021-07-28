import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='p-5' style={{background: '#011627'}}>
                <div className="flex flex-col md:flex-row justify-end text-white">
                        <Link className='flex-grow' to='/login'>Login</Link>  
                        <Link className='' to='/signup'>Signup</Link>                    
                        <Link className='mx-2' to='/'>Home</Link>
                        <Link className='mx-2' to='/about'>About</Link>
                        <Link className='mx-2' to='/places'>Places</Link>   
                </div>
            </nav>
        </>
    )
}

export default Navbar
