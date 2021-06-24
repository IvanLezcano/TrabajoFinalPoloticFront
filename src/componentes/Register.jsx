import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Register = () => {
    return (
        <div class="register">
            <h2>
                Registrarse en nuestra web
            </h2>
                 <form action="POST">
                
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="email">Usuario:</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password" />
                <label htmlFor="password2">Repetir Password:</label>
                <input type="text" name="password2" id="password2" />
              
            
            
            
            
            </form>
            <ul>
            <li><Link to ="/login" exact>Logearse</Link></li>
            <li><Link to ="/registro" exact>Registrarse</Link></li>

            </ul>
        </div>
            
    )
}
