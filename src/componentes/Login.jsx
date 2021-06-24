import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Login = () => {
    return (
        <div class="login">
            <h2>Acceder a nuestra web</h2>
            <form action="POST">
                
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password" />
               
            
            
            
            </form>
            <ul>
            <li><Link to ="/login" exact>Logearse</Link></li>
            <li><Link to ="/registro" exact>Registrarse</Link></li>

            </ul>

        </div>
    )
}
