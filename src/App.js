import '../src/componentes/Header.css';
import "../src/componentes/footer.css"
import { Header } from './componentes/Header'
import { Footer } from './componentes/Footer';
import { Nosotros } from './componentes/Nosotros';
import { Menu } from './componentes/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Menu/>



          <Switch>
            <Route path="/producto">
              <div>
                <Link to="/">
                HOLA PAPA ESTAS EN CONTACTO
                </Link>
              </div>
            </Route>
          </Switch>




            
        <Footer/>
      </div>
    </Router>
  );
}

export default App;



