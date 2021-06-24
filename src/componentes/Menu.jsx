


import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Menu = () => {
    return (
        <div class="menu2">
            <header>
            <ul>

                            <li><Link to ="/" exact>Home</Link></li>
                            <li><Link to ="/categorias">Categorias</Link></li>
                            <li><Link to ="/sobreNosotros">Acerca de..</Link></li>
                            <li><Link to ="/contacto">Contacto</Link></li>
                            <li><Link to ="/admin">Nuevo producto</Link></li>
            </ul>
            
           
            </header>
        </div>
    )
}




