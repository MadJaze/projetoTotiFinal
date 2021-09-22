import React, { useState } from 'react'
import Header from './header'
import Products from './Pages/products'
import Footer from './footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './navbar.css'


function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    



    return (
        
        <Router>
        <div className="fundo">
        <div className="navbar-container">
          <Link to="/" > <p className="logo"><span>C</span>ars<span>S</span>ite<i className ="fas fa-car"></i></p> </Link>

            <ul className={click ? "nav-menu" : "nav-menu-show"}>
            <Link to="/"> <li onClick={handleClick} >Home</li></Link>
            <Link to="/services" > <li onClick={handleClick} >Services</li>   </Link>
            <Link to="/products"> <li onClick={handleClick} >Products</li>   </Link>
            <Link to="/sign-up" > <li onClick={handleClick}  className="nav-link-signUp"><i className="far fa-user-circle"></i>Sign-Up</li> </Link>
            </ul>

            <ul className="nav-menu-largeScreen">
            <Link to="/"> <li>Home</li></Link>
            <Link to="/services"> <li>Services</li>   </Link>
            <Link to="/products"> <li>Products</li>   </Link>
            <Link to="/sign-up" > <li className="nav-link-signUp"><i className="far fa-user-circle"></i>Sign-Up</li> </Link>
            </ul>
            <i className={click ? "fas fa-times" : "fas fa-bars"} onClick={handleClick} />
            


        </div>
        </div>

        <Switch>

        <Route exact path="/"> o
          <Header />
        </Route>
        <Route path="/services">
            Services API component
            <div className='teste'></div>
        </Route>
        <Route path = "/products">o
            <div className="teste2"> 
                <Products />
            </div>
        </Route>
        <Router path="/sign-up">o
           <div className="teste4"> Sign-up component
           
           </div>
        </Router>

        </Switch>
       <div>
        <Footer />
        </div>
        </Router>
       
    )
}

export default Navbar