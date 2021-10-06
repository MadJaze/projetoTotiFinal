import React, { Component } from 'react'
import { getCars } from '../api/axios'


class Carstestes extends Component {
   
    state = { 
        cars: [],
    }

async componentDidMount() {
    const response = await getCars()
    this.setState({cars : response.data})
}

render() {
    const { cars } = this.state

  
return (
    <div className="container-principal">
    <div className ="container-cards">
        {cars.map( car => (
            <div>
            <img src={car.image} alt="modelo_carro"/>
            <ul className="cards">
           <li className="car">{car.car}</li>
           <li className="price">R$ <span>{car.price}</span></li>
           <li className="year">{car.year} - {car.km} km</li>
            </ul>
            </div>
        ))}

    </div>
    </div>
)

}


}




export default Carstestes

