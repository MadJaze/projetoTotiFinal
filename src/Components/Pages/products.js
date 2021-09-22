import React, { useState } from "react";
import './products.css'
import { getCars } from '../api/axios' 

function Products() {
  
  const [lista, setLista] = useState("")

const listar = async() => {
    const result = await getCars()
    setLista(result)
}

    return (

        <div>
           {/*<input type="text" onChange={(event) => handleChange()} placeholder="Which car are you looking for?"/> */}
            <div>           
            <button onClick={() => listar()} className="btn-products">Listar carros</button>
            <h1>O carros com os melhores preços!</h1>
            <input type = "text" placeholder="Que carro você está procurando?" className="input-products"/>
            </div>
            
            {lista && (lista.data?.map(element => {
                return (
                    <div className="container-principal">
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
            }))}
        </div>

    )


}


export default Products 