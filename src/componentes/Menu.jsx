


import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Menu = () => {
    return (
        <div class="header">
            <header>
            <ul>

                            <li><Link to ="/">Home</Link></li>
                            <li><Link to ="/login">Categorias</Link></li>
                            <li><Link to ="/register">Acerca de..</Link></li>
                            <li><Link to ="/contacto">Contacto</Link></li>
                            <li><Link to ="/admin">Nuevo producto</Link></li>
            </ul>
            <div class="search" >
            <input class="busqueda" type="text" placeholder="Search"/>
            <button type="submit" class="fa fa-search lupa"></button>
            </div>
           
            </header>
        </div>
    )
}




