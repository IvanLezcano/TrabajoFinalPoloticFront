import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  export const Header = () => {
    return (
        <div class="header">
                <header>
                <img src="./logo.jpg" />
                    <nav >
                    
                    <button class="menumobile"><i class="fas fa-bars"></i>  </button>

                        <ul>
                            
                            <li><Link to ="/login">Login</Link></li>
                            <li><Link to ="/logout">Logout</Link></li>
                            <li><Link to ="/registro">Registro</Link></li>
                            <li><Link to ="/carrito">Carrito</Link></li>

                        </ul>

                    
                    </nav>
            </header>






        </div>
    )
}



