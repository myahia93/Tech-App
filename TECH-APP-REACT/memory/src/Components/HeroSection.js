import React from 'react';
import { Button } from 'react-bootstrap';
import '../CSS/HeroSection.css';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'



function HeroSection() {
    return (
        <Container fluid>
            <div className='hero-container'>
                <video src="/video-2.mp4" autoPlay loop muted />
                <div className="produitpromo">
                    <img src="./tele.png" />
                    <h1>La téléviseur de dernière technologie</h1>
                    <p>SAMSUNG Neo QLED 8K, une résolution 8K avec 33M de pixels, pour une expérience immersive.</p>
                    <div className="hero-btns">
                        <Link to='/produit/50'><Button variant="outline-light">Acheter</Button>{' '}</Link>
                    </div>
                </div>
                <img src="./infoComp.png" />
            </div>
        </Container>
    )
}

export default HeroSection