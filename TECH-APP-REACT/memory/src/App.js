import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Nouveautes from './Nouveautés/Nouveaute';
import Footer from './Footer/Footer';
import TestPhp from './Components/affichage';
import Galerie from './Components/galerieProduit';
import Connexion from './Components/Connexion';
import Acceuil from './Components/Accueil';
import Produit from './Components/Produit';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Route exact path="/" exact component={Acceuil} />
        <Route path="/galerie/:id" exact component={Galerie} />
        <Route path="/test" exact component={Connexion} />
        <Route path="/produit/:id" exact component={Produit} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
