import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" >Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tutorial">Tutorial</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/community">Community</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;
