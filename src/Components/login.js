import React, { useState } from 'react'
import { userLogin } from './api/axios';
import './login.css'

function Login() {
const [name, setName] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (event) => {
event.preventDefault()
const data = {name: name, password: password}
console.log("user logged!")
userLogin(data)
}
 


    return (
   <div className="help">
        <form className="login-container" onSubmit={handleSubmit}>
            <h1 className="login-title">Login</h1>
            <input type="text" name="name"  placeholder="UserName" required onChange={(event) => setName(event.target.value)}/>
            <input type="text" name="senha" placeholder="Senha" required onChange={(event) => setPassword(event.target.value)}/>
            <button type="submit" name="entrar">Send</button>

        </form>
        </div>
    )
}

export default Login
