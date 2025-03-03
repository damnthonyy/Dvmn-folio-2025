import React from 'react'
import "./Navbar.scss"
import { Hours } from '../hour/Hours'
import { StatusType } from '../StatusType/StatusType'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

export const Navbar: React.FC = () => {
    const status: "available" | "busy" | "unavailable" = "available";
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState)
    };

    return (
        <>
            <div className='navBar'>
                <div className='wrapper'>

                    <div className='area-1'>
                        <div className='logo'>
                            <span className='logo-style'>
                                [Antoine Mahassadi]
                            </span>
                        </div>
                        <Hours />
                    </div>
                    <div className='area-2'>
                        <StatusType status={status} />
                        <Link to="dmantoinepro@gmail.com">
                            <span className='email'> dmantoinepro@gmail.com</span>
                        </Link>
                    </div>

                    <div className='nav-link area-3'>
                        <NavLink to="/Works"> <span className='style-link'>Works</span> </NavLink>
                        <NavLink to="/About"> <span className='style-link'>Who is he ?</span> </NavLink>
                        <NavLink to="/"> <span className='style-link'>Index</span> </NavLink>
                    </div>



                </div>
                <button className='menu-btn' onClick={toggleMenu}>
                    <span className='menu-style'>menu</span>
                </button>
                <div className={`menu-mobile ${isMenuOpen ? 'open' : ''}`}>
                    <h1> Menu</h1>
                </div>
            </div>
        </>
    )
}