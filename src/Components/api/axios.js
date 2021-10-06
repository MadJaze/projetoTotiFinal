import axios from 'axios'

const baseUrl = "http://localhost:3000"

//Para ser colocado dentro da búsqueda de carros. 

export const getCars = async(select) => {
    const url = `${baseUrl}/cars?_page=${select + 1}&_limit=8`
   //const url = `${baseUrl}/cars`
    return await axios.get(url)
}

export const getCarsByName = async(carsName) => { 
    const url = `${baseUrl}/cars?palavra-chave=${carsName}`
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

export const inputServices = async (servico) => {
    const url = `${baseUrl}/services`
    return await axios.post(url, servico)
}

//deletar serviços e carros 

export const deletarCar = async(id) => {
    const url = `${baseUrl}/cars/${id}`
    window.alert('Car deleted :(')
    return await axios.delete(url)
}


export const deleteService = async(id) => {
    const url = `${baseUrl}/services/${id}`
    window.alert('deletado :(')
    return await axios.delete(url)
}

//Para o usuário se logear no site.

export const userLogin = async (usuario) => {
    const url = `${baseUrl}/users`
    window.alert("Logged succesfully :)")
    return await axios.post(url, usuario)
}