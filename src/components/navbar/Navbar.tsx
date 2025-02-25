import React from 'react'
import "./Navbar.scss"
import { Hours } from '../hour/Hours'
import { StatusType } from '../StatusType/StatusType'
import { NavLink, Link } from 'react-router-dom'

export const Navbar: React.FC = () => {
    const status: "available" | "busy" | "unavailable" = "available";
    return (
        <>
            <div className='navBar'>
                <div className='wrapper'>
                    <div className='logo'>
                        <span className='logo-style'>
                            [Antoine Mahassadi]
                        </span>
                    </div>
                    <Hours />
                    <StatusType status={status} />
                    <Link to="dmantoinepro@gmail.com"> <span className='email'> dmantoinepro@gmail.com</span></Link>

                    <div className='nav-link'>
                        <NavLink to="/Works"> <span className='style-link'>Works</span> </NavLink>
                        <NavLink to="/About"> <span className='style-link'>Who is he ?</span> </NavLink>
                        <NavLink to="/"> <span className='style-link'>Index</span> </NavLink>
                    </div>



                </div>
            </div>
        </>
    )
}