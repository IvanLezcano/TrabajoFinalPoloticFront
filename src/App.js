import './App.css';
import "./footer.css"
import Header from './componentes/header';
import Footer from './componentes/footer';
import { Nosotros } from './componentes/Nosotros';
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
          <div>hola</div>
          
          <Switch>
            <Route path="/contacto">
              <div>
                HOLA PAPA ESTAS EN CONTACTO
              </div>
            </Route>
          </Switch>
            
        <Footer/>
      </div>
    </Router>
  );
}

export default App;



