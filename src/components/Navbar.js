import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'; /*Import button script*/
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    /*Show the button depending on the size of the window*/
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    }
   
    useEffect(() => { showButton()}, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            {/*Container for navagation bar*/}
            <div className="navbar-container">
                {/*Logo*/}
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    NEXT <i className="fab fa-typo3"></i>
                    </Link> 
                 {/*Menu*/} 
                <div className='menu-icon' onClick={handleClick}>
                      {/*Changes images when clicked*/}
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div> 
                {/*Changes list format when clicked*/}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                     {/*listed items in the navagation bar*/}
                    <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                    </ul>  
                     {/*Sign up Button*/} 
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
