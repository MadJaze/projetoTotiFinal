import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getCarsById } from "../api/axios";
import UseFetch from "./useFetch";

export default function Cars1() {
  const { id } = useParams()
  const {data: blog, error, isPending } = UseFetch(`http://localhost:3000/cars/${id}`);






  let location = useLocation()

 

    console.log(`hello`, location)

    return (
        <div>
          { isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {blog && (
            <article>
              <h2>{blog.car}</h2>
              <p>{blog.color}</p>
            </article>
          )}
          <h1>Car identified: { id } </h1>
          <p>Location identified: {location.pathname}</p>
        
        </div>
    )
} 