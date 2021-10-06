import React from "react";
import { useLocation } from "react-router-dom";

export default function Cars1() {
  let location = useLocation()
    console.log(`hello`, location)
    return (
        <div>Car identified: </div>
    )
} 