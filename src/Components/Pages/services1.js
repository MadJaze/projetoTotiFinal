import React from "react";
import { useLocation, useParams } from "react-router-dom";
import UseFetch from "./useFetch";
import './cars1.css'

export default function Chocolate() {
  const { id } = useParams()
  
  const { data: blog, error, isPending } = UseFetch(`http://localhost:3000/services/${id}`);


let location = useLocation()
console.log('hello', location)


return (
  <div className="container-by-id">
    { isPending && <h1>Loading...</h1> }
     { isPending && <img  className="img-loading" src="https://media4.giphy.com/media/cMWqyc9HCOdieCC2wh/giphy.gif?cid=790b7611587aca34ae0a56c62c4d51fd53b6cc456de9db46&rid=giphy.gif&ct=g"/>}
    {error && <div> {error}<img className="img-error" alt="carro-sem-luz" src="https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/11pzkk90zbmlh.jpg"/></div>}
    {blog && (
      <article>
        <h1 className="title-by-id"><span>{blog.name}</span></h1>
        
        <div className="conteudo-by-id">
        <p>{blog.description}</p>
        <img src={blog.image}/>
        <div className="payment-method">
        <p className="frete-gratis"><i className="fas fa-truck"></i> Frete Grátis</p>
        <p className="prazos-de-entrega">Saiba os prazos de entrega e as formas de envío</p>
        <a className="location" href="http://localhost:3000/"> <i className="fas fa-map-marker-alt"></i> Calcular o prazo de entrega </a>
        <p className="estoque">Estoque disponível</p> 
        <h2 className="price-by-id2">R$ {blog.price} <span className="little">(10x parcelas) </span></h2>
          <button className="btn-purchase-payment">Comprar!</button>

          </div> 
          <hr></hr>
        </div>
       
      </article>
    )}

   {/* <h1>Car identified: { id } </h1>
    <p>Location identified: {location.pathname}</p> */}
  
  </div>
)

        }