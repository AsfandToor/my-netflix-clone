import React from 'react'
import logo from './logo.png'
import icon from './user.jpg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="header">
            <nav className="navigation">
                <a href="" className="logo-link"><img className="logo" src={logo} alt="Logo" /></a>
                <ul className="nav-list">
                    <li className="nav-item"><a href="" className="nav-link active">Home</a></li>
                    <li className="nav-item"><a href="" className="nav-link">TV Shows</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Movies</a></li>
                    <li className="nav-item"><a href="" className="nav-link">New & Popular</a></li>
                    <li className="nav-item"><a href="" className="nav-link">My List</a></li>
                    <li className="nav-item nav-item-small"><a href="" className="nav-link">Browse <i class="fa fa-sort-down"></i></a></li>
                </ul>
            </nav>
            <div className="side-nav">
                <div className="search-icon"><i className="fa fa-search"></i></div>
                <div className="dvd-icon">DVD</div>
                <div className="notfication-icon"><i className="fa fa-bell"></i></div>
                <div className="user-icon"><img className="user-img" src={icon} alt="User Icon" /></div>
                <div className="dropdown"><i class="fa fa-sort-down"></i></div>
            </div>
        </div>
    )
}

export default Navbar
