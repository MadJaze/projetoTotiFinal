/*import React, {  useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from  'axios'

import { inputCar, updateCars, getCars,  } from './api/axios'


 function AdminEditCars() {

    const { id } = useParams()
    
    const data = { car: car, palavraChave: palavraChave, description: description, price: price, year: year, km: km, image: image }
    const task = await getCars(id)
    const res =  axios.put (`http://localhost:3000/updateCars/${id}`, {...data})
    return res.data

    const updateCars = async (id, note) => {
        const task = await getCars(id)
        const res =  await axios.put (`http://localhost:3000/updateCars/${id}`, {...task, note: note})
        return res.data
    }


  
    const [car, setCar] = useState()
    const [palavraChave, setPalavraChave] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [year, setYear] = useState()
    const [km, setKm] = useState()
    const [image, setImage] = useState()



      const handleSubmit = async(event) => {
        event.preventDefault()
        const data = { car: car, palavraChave: palavraChave, description: description, price: price, year: year, km: km, image: image }
        updateCars(data)
    }
    
   


 
     
    return (

        <form className="admin-cars-container" onSubmit={handleSubmit}>
        <h1>Car Imput Update</h1>
        <label> Enter your name Car:</label>
        <input type="text" onChange={(event) => setCar(event.target.value)}/>
        
        <label> Enter your description Car: </label>
        <input type="text" onChange={(event) => setDescription(event.target.value)}/>
       <label> Enter "Key word" for search: </label>
       <input type="text" onChange={(event) => setPalavraChave(event.target.value)} />
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
}*/