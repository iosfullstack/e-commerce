import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import {FiShoppingCart} from 'react-icons/fi'
import {GoThreeBars} from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// npm install react-icons --save
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true)

    const toggleNav = () => {
        setShowMenu((showMenu) => !showMenu)
    }
  return (
    <header>
        <div className="navbar">
            {/* logo */}
            <div className="nav-logo">
                <img src={Logo} alt="logo" />
                <span>amazon</span>
            </div>
            {/* navbar links and search input */}
            <div className="nav-right">

                <div className="toggle-hamburger md:hidden" onClick={toggleNav}>
                    <GoThreeBars/>
                </div>
                {/* Navbar Links */}
                <div className="menu">
                    <ul className='nav-links' style={{display: showMenu ? 'flex': 'none'}}>
                        <Link>
                            <li>Collections</li>
                        </Link>
                        <Link>
                            <li>Brands</li>
                        </Link>
                        <Link>
                            <li>New</li>
                        </Link>
                        <Link>
                            <li>Sales</li>
                        </Link>
                        <Link>
                            <li>ENG</li>
                        </Link>
                    </ul>
                </div>
                {/* Search input */}
                <input type="search" name="" className="search" placeholder='search..' />
                {/* Cart logo */}
                <FiShoppingCart className='nav-cart' />
            </div>
        </div>
    </header>
  )
}

export default Navbar