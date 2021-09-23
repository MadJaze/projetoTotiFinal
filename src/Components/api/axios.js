import axios from 'axios'

const baseUrl = "http://localhost:3000"

//Para ser colocado dentro da búsqueda de carros. 

export const getCars = async() => {
   // const url = `${baseUrl}/cars?_page=1&_limit=3`
   const url = `${baseUrl}/cars`
    return await axios.get(url)
}

//Para ser colocado dentro da búsqueda de serviços.

export const getServices = async() => {
    const url = `${baseUrl}/services`
    return await axios.get(url)
}

// Para o admin colocar carros e serviços dentro do site

export const inputCar = async (carro) => {
    const url = `${baseUrl}/cars`
    return await axios.post(url, carro)
}