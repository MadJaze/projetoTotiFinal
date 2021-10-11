import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import "./adminCars.css"
import { inputCar, deletarCar, getCars } from "./api/axios";


export default function AdminCars() {

const [lista, setLista] = useState()

 const [car, setCar] = useState()
 const [palavraChave, setPalavraChave] = useState()
 const [description, setDescription] = useState()
 const [price, setPrice] = useState()
 const [year, setYear] = useState()
 const [km, setKm] = useState()
 const [image, setImage] = useState()

const handlePageClick = async(data) => {
  let select = data.selected
  console.log(select)
  const result = await getCars(select)
  setLista(result)

}

const handleSubmit = async(event) => {
    event.preventDefault()
    const data = { car: car, palavraChave: palavraChave, description: description, price: price, year: year, km: km, image: image }
    const result = await getCars()
    setLista(result)
    inputCar(data)
}

const listar = async() => {
    const result = await getCars()
    setLista(result)    
}

const deletar = async(id) => {
    deletarCar(id)
    const result= await getCars()
    setLista(result)
}


return (
 <div>
        <form className="admin-cars-container" onSubmit={handleSubmit}>
            <h1>Car Imput System</h1>
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

      <div className = 'delete-form'>
          <button className="btns" onClick={() => listar()}>Update Cars</button>
      </div>
      <div className="haciendo-milagros">
          {lista && lista.data?.map(element => {
              return (
                <div key= {element.id} className="container-principal" onClick={() => deletar(element.id)}>
                    <div className="container-cards"> 
                    <img src={element.image} alt="modelo_carro"/>
                        <ul className="cards">
                       
                        <li className="car">{element.car}</li>
                        <li className="price">R$ <span>{element.price}</span></li>
                        <li className="year">{element.year} - {element.km} km</li>
                        </ul>
                    
                    </div>
                    
                </div>       
              )
          })}
      </div>

     
<ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={4}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
</div>
        
)



}