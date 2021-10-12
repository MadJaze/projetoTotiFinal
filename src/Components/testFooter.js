import React from 'react'
import { Link } from 'react-router-dom'
import './testFooter.css'

export default function TestFooter() {

    return ( 
        <footer>
            <div className="footer-container">
                <div className="left box">

                    <h2>About Us</h2>
                    <div className="content">
                    <p>This proyect was developed by: Jasiel Padrón, Paulo Soyepia Alberto and Andreina Velásquez Jiménez.</p>
                   

                    <div className="social"> 
                    <a href="https://github.com/"> <i className="fab fa-github-square "></i> </a>
                    <a href="https://www.instagram.com/"> <i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/gaming/Madjaze"><i className="fab fa-facebook-square"></i></a>
                    </div>
                    </div>
                    </div> {/*LEFT BOX*/}
                    <div className="center box">
                        <h2>Address</h2>
                        <div className="content">

                            <div className="place"> 
                            <span className="fas fa-map-marker"></span>
                            <span className="text">  São Paulo, Brasília, Rio de Janeiro </span>
                            </div>

                            <div className="Phone"> 
                            <span className="fas fa-phone-alt"></span>
                            <span className="text"> +55 (11)99241-4766</span>
                            </div>

                            <div className="email"> 
                            <span className="fas fa-envelope"></span>
                            <span className="text"> carssite1234@gmail.com</span>
                             </div>

                        </div>
                    </div>

                    <div className="right box">
                        <h2>Contato</h2>
                            <div className="content">
                                <form action ="#">
                                    <div className="email">
                                        <div className="text">Email *</div>
                                        <input type="email" /> 
                                    </div>
                                    <div className="msg">
                                        <div className="text">Message *</div>
                                       <textarea rows="2" cols="25" />
                                    </div>
                                    <div className="button">
                                        <button type="button" className="btn">Send</button>
                                    </div>
                                </form>

                            </div>
                    </div>

            </div>

            <div className="bottom">
                <div className="center">
                <Link to ="/special"> <span className="far fa-copyright"> Todos os Direitos reservados: CarsSite 2021</span> </ Link>
                </div>
            </div>
           
         
        </footer>
    )


}