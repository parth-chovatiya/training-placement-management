import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
import Cookie from 'js-cookie'

function Navbar() {

  const [loginStudent, setLoginStudent] = useState(false)
  const [loginCompany, setLoginCompany] = useState(false)
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    const lg = Cookie.get('login')
    console.log(lg)
    if(lg==='student'){
      setLoginStudent(true)
      setLoginCompany(false)
    }
    else if(lg==='company'){
      setLoginCompany(true)
      setLoginStudent(false)
    }
    showButton();
  }, [loginStudent, loginCompany]);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {loginStudent && (<li className='nav-item'>
              <Link to='/student/dashboard' className='nav-links' onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>)}
            {loginCompany && (<li className='nav-item'>
              <Link to='/company/dashboard' className='nav-links' onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>)}
            {(!loginStudent && !loginCompany) && (<li className='nav-item'>
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                Login
              </Link>
            </li>)}
            {(loginStudent || loginCompany)&& (<li className='nav-item'>
              <Link to='/logout' className='nav-links' onClick={closeMobileMenu}>
                Logout
              </Link>
            </li>)}
            {/* <li className='nav-item'>
              <Link to='/student/login' className='nav-links' onClick={closeMobileMenu}>
                Student Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/company/login' className='nav-links' onClick={closeMobileMenu}>
                Company Login
              </Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
                </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
