import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import image1 from './../assets/images/slide_1_iphone.png';
import image2 from './../assets/images/slide_2_ipad.png';
import image3 from './../assets/images/slide_3_zenbook.png';
import image4 from './../assets/images/slide_4_enceinte.png';
import image5 from './../assets/images/slide_5_applewatch.png';
import { Link } from 'react-router-dom'

export default function CarouselContainer() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>iPhone 12 Pro</h3>
          <p>On n'arrête pas le progrès. On l'accélère.</p>
          <Link to='/produit/1'><Button variant="outline-light">Acheter</Button>{' '}</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>iPad Mini</h3>
          <p>Mini à son maximum.</p>
          <Link to='/produit/14'><Button variant="outline-light">Acheter</Button>{' '}</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Asus ZenBook</h3>
          <p>Boostez votre créativité avec le ZenBook. Ultrarapide et élégant.</p>
          <Link to='/produit/21'><Button variant="outline-light">Acheter</Button>{' '}</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Enceinte connectées</h3>
          <p>Equipez votre maison d'un assistant vocal.</p>
          <Link to='/produit/40'><Button variant="outline-light">Acheter</Button>{' '}</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Apple Watch</h3>
          <p>La santé du futur. Dès à présent.</p>
          <Link to='/produit/48'><Button variant="outline-light">Acheter</Button>{' '}</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

