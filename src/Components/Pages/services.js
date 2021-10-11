import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './products.css'
import ReactPaginate from 'react-paginate'
import { getServices, getServicesByName, getServicesById } from "../api/axios"


function Services() {

const [lista, setLista] = useState("")

useEffect (async () => {
    const result = await getServices()
    setLista(result)
}, [])

/*const listar = async() => {
    const result = await getServices()
    setLista(result)
}*/

const handleChange = async(e) => {

    console.log(e.target.value)
    const result = await getServicesByName(e.target.value) 
    setLista(result)
    console.log(result)

}

const handlePageClick = async(data) => {
    let select = data.selected 
    console.log(select)
    const result = await getServices(select)
    setLista(result)
}



return (

    <div>
      {/* <button onClick={() => listar()} className="btn-products">Get Services</button>*/}
        <div>
        <h1>Confira os nossos serviços!</h1>
        <input type="text" onBlur={handleChange} placeholder="Qual serviço está procurando?" className="input-products"/>
        </div>
        {lista && (lista.data?.map(element => {
        return (
            <div className="container-principal"><Link to= {`/services/${element.id}`} state ={{id: element.id}} >
               <div className="container-cards">
                    <img src={element.image} alt="serviço"/>
                    <ul className="cards">
                    <li className="car">{element.name}</li>
                    <li className="price">R$<span>{element.price}</span></li>
                    <li className="year">{element.quota}x Quotes to pay</li>
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

   

)}

export default Services