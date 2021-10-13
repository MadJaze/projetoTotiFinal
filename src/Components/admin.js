//Este componente será acrescentado com o 
//fim de que como admin do site possa 
//criar ou acrescentar carros e serviços no db.json de forma não direta
import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./admin.css"
import AdminCars from "./adminCars"
import AdminServices from "./adminservices"


export default function Admin() {


 


    return (

        <Router>

                
                <div className="admin-options"> 
                <Link to="/admin-cars-input"><button>Cars</button></Link>
               <Link to="/admin-services-input"> <button>Services</button></Link>
                </div>

                <div className="red-caution"> 
                    Welcome to Admin-Mode: This mode can be accessed easily by anyone to add and delete database into this WebSite; CAUTION: if you click on any element (card selected), this element will be deleted forever.   
                </div>

                <Switch>
                    <Route path="/admin-cars-input">
                    <div className="teste-admin-cars"><AdminCars /></div>
                    </Route>
                    <Route path="/admin-services-input">
                    <div className="teste-admin-services"><AdminServices /></div>
                    </Route>
                </Switch>

        </Router>
    )


}