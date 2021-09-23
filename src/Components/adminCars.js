import React, { useState } from "react";
import "./adminCars.css"
import { inputCar } from "./api/axios";


export default function AdminCars() {

 const [car, setCar] = useState()
 const [color, setColor] = useState()
 const [price, setPrice] = useState()
 const [year, setYear] = useState()
 const [km, setKm] = useState()
 const [image, setImage] = useState()



const handleSubmit = (event) => {
    event.preventDefault()
    const data = { car: car, color: color, price: price, year: year, km: km, image: image }
    inputCar(data)
}


return (
 
        <form className="admin-cars-container" onSubmit={handleSubmit}>
            <h1>Car Imput System</h1>
            <label> Enter your name Car:</label>
            <input type="text" onChange={(event) => setCar(event.target.value)}/>
            
            <label> Enter your color Car: </label>
            <input type="text" onChange={(event) => setColor(event.target.value)}/>
           
            <label> Enter your price Car:   </label>
            <input type="number" onChange={(event) => setPrice(event.target.value)}/>
            <label> Enter your Year Car:   </label>
            <input type="number" onChange={(event) => setYear(event.target.value)}/>
            <label> Enter your KM Car:   </label>
            <input type="number" onChange={(event) => setKm(event.target.value)}/>
            <label> Enter your image Car:   </label>
            <input type="text" onChange={(event) => setImage(event.target.value)}/>
          
            <button type="submit" className="btn-send-database">Send new Database </button>
        </form>

)



}