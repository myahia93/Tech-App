import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import logo from './logo_TechApp.png'
import menu from './menu_TechApp.png'
import panier from './panier_TechApp.png'
import recherche from './recherche_TechApp.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);    //par defaut cacher le menu
    const [togglePanier, setTogglePanier] = useState(false);
    const [toggleRecherche, setToggleRecherche] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNavSmallScreen = () => { //permet de changer l'etat du menu (caché/pas caché)
        setToggleMenu(!toggleMenu);
        setTogglePanier(!togglePanier);
        setToggleRecherche(!toggleRecherche);
    }

    const toggleNavSmallScreenLogo = () => {
        setToggleMenu(false);
        setTogglePanier(false);
        setToggleRecherche(false);
    }


    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if (window.innerWidth > 1165) {//permet de recacher le menu
                setToggleMenu(false);
                setTogglePanier(false);
                setToggleRecherche(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

    return (
        <nav className="fixed-top">

            <div className="navGauche">
                <Link onClick={toggleNavSmallScreenLogo} to='/'><img className="logo" src={logo} alt="logo"></img></Link>
                <button onClick={toggleNavSmallScreen} className="btnNav"><img src={menu}></img></button>
            </div>

            <div className="navDroite">

                <div className="navElt">
                    {(toggleMenu || largeur > 1165) && (
                        <ul className="liste">
                            <li className="items"><Link onClick={toggleNavSmallScreen} to='/galerie/1'>Smartphone</Link></li>
                            <li className="items"><Link onClick={toggleNavSmallScreen} to='/galerie/2'>Tablette</Link></li>
                            <li className="items"><Link onClick={toggleNavSmallScreen} to='/galerie/3'>Ordianteur</Link></li>
                            <li className="items"><Link onClick={toggleNavSmallScreen} to='/galerie/4'>Enceinte</Link></li>
                            <li className="items"><Link onClick={toggleNavSmallScreen} to='/galerie/5'>Watch</Link></li>
                            <li className="items"><Link onClick={toggleNavSmallScreen} to='/galerie/6'>Téléviseur</Link></li>
                        </ul>
                    )}
                </div>

                <div className="navElt2">
                    <div className="rechercheBar">
                        {(toggleRecherche || largeur > 1165) && (
                            <form action="" method="POST">
                                <input type="text" className="barre" placeholder="Rechercher un article..." required />
                                <button type="submit" className="barrebtn"><img src={recherche}></img></button>
                            </form>
                        )}
                    </div>
                    <div className="divpanier">
                        {(togglePanier || largeur > 1165) && (
                            <Link onClick={toggleNavSmallScreen} to='/test'><img className="icon1" src={panier} alt="panier"></img></Link>
                        )}
                    </div>
                </div>

            </div>
        </nav>
    )
}
