import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,  Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate';

import './products.css'
import { getCars, getCarsByName } from '../api/axios' 


function Products() {
  
  const [lista, setLista] = useState("")
  
  useEffect (async() => {
    const result = await getCars()
    setLista(result)
  }, [])

/*const listar = async() => {
    const result = await getCars()
    setLista(result)
}*/

const handleChange = async (e) => { 
    console.log(e.target.value)
    const result = await getCarsByName(e.target.value)
    setLista(result)
    console.log(result)
}

const handlePageClick = async (data) => {
    let select = data.selected 
    console.log(select)
    const result = await getCars(select)
    setLista(result) 
}

    return (
      <Router> 
        <div>
           {/*<input type="text" onChange={(event) => handleChange()} placeholder="Which car are you looking for?"/> */}
            <div>           
           {/* <button onClick={() => listar()} className="btn-products">Listar carros</button> */}
            <h1>O carros com os melhores preços!</h1>
            <input type = "text" onBlur={handleChange} placeholder="Que carro você está procurando?" className="input-products"/>
            </div>
            
            {lista && (lista.data?.map(element => {
                return (
                    <div className="container-principal"><Link to= {`/cars/${element.id}`} state ={{id: element.id}} >
                    <div className="container-cards">
                    <img src={element.image} alt="modelo_carro"/>
                        <ul className="cards">
                       
                        <li className="car">{element.car}</li>
                        <li className="price">R$ <span>{element.price}</span></li>
                        <li className="year">{element.year} - {element.km} km</li>
                        </ul>
                    </div>
                    </Link>
                    </div>
                )
            }))}

            
<ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
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
        </Router>
    )


}


export default Products 