import CarouselContainer from './CarouselContainer';
import Nouveautes from '../Nouveautés/Nouveaute';
import HeroSection from './HeroSection';
import '../CSS/Acceuil.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Accueil() {
  return (
    <div className="Accueil">
      <CarouselContainer />
      <Nouveautes />
      <HeroSection />
    </div>
  );
}

export default Accueil;