import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'



function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    



    return (
        
      
        <div className="fundo">
        <div className="navbar-container">
          <Link to="/" > <p className="logo"><span>C</span>ars<span>S</span>ite<i className ="fas fa-car"></i></p> </Link>

            <ul className={click ? "nav-menu" : "nav-menu-show"}>
            <Link to="/"> <li onClick={handleClick} >Home</li></Link>
            <Link to="/services" > <li onClick={handleClick} >Services</li>   </Link>
            <Link to="/products"> <li onClick={handleClick} >Products</li>   </Link>
            <Link to="/sign-up" > <li onClick={handleClick}  className="nav-link-signUp"><i className="far fa-user-circle"></i>Sign-Up</li> </Link>
            <Link to="/admin-mode"><li onClick={handleClick} className="setup"><i className="fas fa-cog"> Admin/mode</i></li></Link>
            </ul>

            <ul className="nav-menu-largeScreen">
            <Link to="/"> <li>Home</li></Link>
            <Link to="/services"> <li>Services</li>   </Link>
            <Link to="/products"> <li>Products</li>   </Link>
            <Link to="/sign-up" > <li className="nav-link-signUp"><i className="far fa-user-circle"></i>Sign-Up</li> </Link>
            <Link to="/admin-mode"><li className="setup"><i className="fas fa-cog"></i></li></Link>
            </ul>
            <i className={click ? "fas fa-times" : "fas fa-bars"} onClick={handleClick} />
            
        </div>
        </div>

      
       
       
    )
}

export default Navbar