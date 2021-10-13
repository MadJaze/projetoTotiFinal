import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { inputServices, deleteService, getServices } from "./api/axios"

function AdminServices() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quota, setQuota] = useState("")
    const [image, setImage] = useState("")
    const [lista, setLista] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {name: name, price: price, quota: quota, image: image}
        const result = await getServices()
        setLista(result)
        inputServices(data)
    }

    const handlePageClick = async (data) => {
        let select = data.selected
        console.log(select)
        const result  = await getServices(select)
        setLista(result)

    }

   
    const deletar = async(id) => {
        let confirmDelete = window.confirm(`Are you sure about delete this element?`)
        if (confirmDelete) {
            deleteService(id)
        const result = await getServices()
        setLista(result)
        } else {
            const result = await getServices()
        setLista(result)
        }
        
    }

    const listar = async() => {
        const result = await getServices()
        setLista(result)
    }

    return (
<div>  
          <form className="admin-cars-container" onSubmit={handleSubmit}>
            <h1>Services Input System</h1>
            <label> Enter your service:</label>
            <input type="text" required onChange={(event) => setName(event.target.value)}/>
            
            <label> How much this service cost? </label>
            <input type="text" required onChange={(event) => setPrice(event.target.value)}/>
           
            <label> How many Quotes you pay this service?:   </label>
            <input type="number" required onChange={(event) => setQuota(event.target.value)}/>
            <label> Enter your Image Service:   </label>
            <input type="text" required onChange={(event) => setImage(event.target.value)}/>
            
          
            <button type="submit" className="btn-send-database">Send new Database </button>
        </form>
        <div className="delete-form">
        <button className="btns" onClick={() => listar()}>Update Services</button>
        </div>
        <div className="haciendo-milagros">
        

        {lista && (lista.data?.map(element => {
        return (
            <div key={element.id}  className="container-principal">
                <div className="container-cards">
                    <img src={element.image} alt="serviço"/>
                    <ul className="cards">
                    <li className="car">{element.name}</li>
                    <li className="price">R$<span>{element.price}</span></li>
                    <li className="year">{element.quota}x Quotes to pay</li>
                    </ul>
                    <ul className="options-list">
                        <li className="edit"><i class="far fa-edit"></i></li>
                        <li className="delete" onClick={() => deletar(element.id)}><i class="fas fa-trash-alt"></i></li>
                    </ul>
                </div>
            </div>
        )
    }))}


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

export default AdminServices
