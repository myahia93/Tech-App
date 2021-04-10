import React from 'react'
import "./Footer.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import twitter from './twitter.jpg';
import logo from '../Navbar/logo_TechApp.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={3} md={3} sm={12}>
                        <h5 class="text-uppercase titreFooter">Contact</h5>
                        <ul class="list-unstyled mb-4">
                            <li>
                                <a href="https://www.google.com/maps/place/IUT+De+Montreuil/@48.8624375,2.4619808,17z/data=!3m1!4b1!4m5!3m4!1s0x47e612ae6a4cd20d:0xfe5502b116430be!8m2!3d48.8624375!4d2.4641748">Adresse :</a>
                                <p>156 rue de France,<br></br> 93100, Montreuil</p>
                            </li>
                            <li>
                                <a href="#!">Email :</a>
                                <p>techapp.pro@gmail.com</p>
                            </li>
                            <li>
                                <a href="#!">Téléphone :</a>
                                <p>(+33)123456789</p>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                        <h5 class="text-uppercase titreFooter">Produits</h5>
                        <ul class="list-unstyled mb-4">
                            <li><Link to='/galerie/1'>Smartphone</Link></li>
                            <li><Link to='/galerie/2'>Tablette</Link></li>
                            <li><Link to='/galerie/3'>Ordianteur</Link></li>
                            <li><Link to='/galerie/4'>Enceinte</Link></li>
                            <li><Link to='/galerie/5'>Watch</Link></li>
                            <li><Link to='/galerie/6'>Téléviseur</Link></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                        <h5 class="text-uppercase titreFooter">Réseaux</h5>
                        <ul class="list-unstyled mb-4">
                            <li>
                                <img class="footerImage" src={twitter} alt="Twitter"></img>
                                <a href="">Twitter</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div class="copyright">
                <div class="contenu mx-auto">
                    <h6 class="text-center">TechApp © 2021 Copyright - Tous droits réservés</h6>
                    <a href=""><img class="img-fluid" src={logo} alt="Logo du Footer" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
