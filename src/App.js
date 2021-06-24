import { useEffect, useState } from 'react';


import '../src/componentes/Header.css';
import "../src/componentes/footer.css"
import "../src/componentes/Producto.css"
import "../src/componentes/MasProductos.css"
import "../src/componentes/Login.css"
import "../src/componentes/Register.css"




import { Header } from './componentes/Header'
import { Footer } from './componentes/Footer';
import { Nosotros } from './componentes/Nosotros';
import { Menu } from './componentes/Menu';
import { Producto } from './componentes/Producto';
import { MasProductos } from './componentes/MasProductos';
import { Login } from './componentes/Login';
import { Busqueda } from './componentes/Busqueda';
import { Register } from './componentes/Register';
import axios from 'axios';








import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {


const [productos, setProductos] =  useState([])
const handleClick = () => {
  setProductos([...productos,{ nombre: "carnes",
  url: "https://picsum.photos/210/300"}])
}
const handleBorrarCarnes = () => {
  const ultimoElemento =  productos[productos.length-1]


  setProductos(productos.filter( producto => { return producto!==ultimoElemento })
  )
}


const ObtenerProductos = async () => {
  const {data} = await axios.get('http://127.0.0.1:8000/productos')
  return  data
  ;
}


  useEffect(async () => {
    const productosQuery = await ObtenerProductos()
    setProductos(productosQuery)
  }, [])

  return (
    <Router>
      <div className="App">
        <Header/>
        <Menu/>
        
        <Switch>
            <Route path="/login" exact>
              <div>
                <Login/>
              </div>
            </Route>
          </Switch>
          <Switch>
            <Route path="/registro" exact>
              <div>
                <Register/>
              </div>
            </Route>
          </Switch>
        
        <Switch>
            <Route path="/sobreNosotros" exact>
              <div>
                <h2>HOLA BIENVENIDOS</h2>
              </div>
            </Route>
          </Switch>

          <Switch>
            <Route path="/producto" exact>
              <div>
              </div>
            </Route>
          </Switch>

          <Switch>
            <Route path="/" exact>
              <Busqueda/>
              <div class="inicioDeProductos">
                {productos.map(producto => (<Producto nombre={producto.nombre} url={producto.url} /> ) )}  
              </div>

              <button type="button" onClick= {handleClick}>ESTE ES EL BOTON</button>
              <button type="button" onClick= {handleBorrarCarnes}>ESTE ES BOTON DE BORRADO</button>


              <div>
              <MasProductos/>
              </div>
            </Route>
          </Switch>



            
        <Footer/>
      </div>
    </Router>
  );
}


export default App;


