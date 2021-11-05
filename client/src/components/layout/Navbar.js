import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/">
                WemoovTeams
                </Link>
            </h1>
            <ul>
                <li>Clients</li>
                <li>Register</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Navbar