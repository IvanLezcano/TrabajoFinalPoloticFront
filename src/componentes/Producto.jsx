import React from 'react'

export const Producto = (props) => {
    return (
        <div class="producto">
            <h2>{props.nombre}</h2>
            <img src={props.url} alt="" />
            <button type="submit">ver</button>
        </div>
      
    )
}
