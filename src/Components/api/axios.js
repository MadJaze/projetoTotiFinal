import axios from 'axios'

const baseUrl = "http://localhost:3000"

//Para ser colocado dentro da búsqueda de carros. 

export const getCars = async() => {
    const url = `${baseUrl}/cars`
    return await axios.get(url)
}

