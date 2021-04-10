import React, { useEffect, useState } from "react";
import "./Nouveaute.css"
import Button from 'react-bootstrap/Button';
import { Collapse } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

//Image Smartphone
import carre from './../assets/images/carrehuawei.png';
import carre2 from './../assets/images/iphone2.0.png';
import carre3 from './../assets/images/xiaomi.png';
import carre4 from './../assets/images/samsung2.0.png';
import carre5 from './../assets/images/oppo2.0.png';

//Image Tablette
import Tabcarre from './../assets/images/samsung_galaxy.png';
import Tabcarre2 from './../assets/images/ipad_mini.png';
import Tabcarre3 from './../assets/images/huawei_tablet.png';
import Tabcarre4 from './../assets/images/ipad_air.png';
import Tabcarre5 from './../assets/images/ipad.png';

//Image Ordi
import Ordicarre from './../assets/images/ordi_acer.png';
import Ordicarre2 from './../assets/images/ordi_asus.png';
import Ordicarre3 from './../assets/images/ordi_asusZenbook.png';
import Ordicarre4 from './../assets/images/ordi_huawei.png';
import Ordicarre5 from './../assets/images/ordi_macbook.png';

import { Link } from 'react-router-dom'

function Nouveaute() {
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    function handleClick(e) {
        setOpen(true);
        setOpen2(false);
        setOpen3(false);
    }

    function handleClick2(e) {
        setOpen(false);
        setOpen2(true);
        setOpen3(false);
    }

    function handleClick3(e) {
        setOpen(false);
        setOpen2(false);
        setOpen3(true);
    }

    return (
        // <Container className="nouv">
        //     <Row>
        //         <Col sm={12} md={3} lg={3} xl={3}>
        //             <div className="gauche">
        //                 <a href=""><img className="carre" src={carre} alt="carre"></img></a>
        //             </div>
        //             <div className="gauche">
        //                 <a href=""><img className="carre" src={carre} alt="carre"></img></a>

        //             </div>
        //         </Col>
        //         <Col xs={12} sm={12} md={6} lg={6} xl={6}>
        //             <div className="centre">
        //                 <a href=""><img className="carre" src={carre} alt="carre"></img></a>
        //             </div>
        //         </Col>
        //         <Col sm={12} md={3} lg={3} xl={3}>
        //             <div className="droite">
        //                 <a href=""><img className="carre" src={carre} alt="carre"></img></a>
        //             </div>
        //             <div className="droite">
        //                 <a href=""><img className="carre" src={carre} alt="carre"></img></a>
        //             </div>
        //         </Col>
        //     </Row>
        // </Container>
        <Container className="nouv">
            <h2>NOUVEAUTÉS</h2>
            <button
                onClick={handleClick}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Smartphone
        </button>
            <button
                onClick={handleClick2}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Ordinateur
        </button>
            <button
                onClick={handleClick3}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Tablette
        </button>
            <Collapse in={open}>
                <Container className="nouv">
                    <Row>
                        <Col sm={12} md={3} lg={3} xl={3}>
                            <div className="gauche">
                                <Link to='/produit/2'><img className="carre" src={carre} alt="carre"></img></Link>
                            </div>
                            <div className="gauche">
                                <Link to='/produit/1'><img className="carre" src={carre2} alt="carre"></img></Link>

                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="centre">
                                <Link to='/produit/5'><img className="carre" src={carre3} alt="carre"></img></Link>
                            </div>
                        </Col>
                        <Col sm={12} md={3} lg={3} xl={3}>
                            <div className="droite">
                                <Link to='/produit/3'><img className="carre" src={carre4} alt="carre"></img></Link>
                            </div>
                            <div className="droite">
                                <Link to='/produit/4'><img className="carre" src={carre5} alt="carre"></img></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Collapse>
            <Collapse in={open2}>
                <Container className="nouv">
                    <Row>
                        <Col sm={12} md={3} lg={3} xl={3}>
                            <div className="gauche">
                                <Link to='/produit/30'><img className="carre" src={Ordicarre} alt="carre"></img></Link>
                            </div>
                            <div className="gauche">
                                <Link to='/produit/29'><img className="carre" src={Ordicarre4} alt="carre"></img></Link>

                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="centre">
                                <Link to='/produit/24'><img className="carre" src={Ordicarre5} alt="carre"></img></Link>
                            </div>
                        </Col>
                        <Col sm={12} md={3} lg={3} xl={3}>
                            <div className="droite">
                                <Link to='/produit/25'><img className="carre" src={Ordicarre2} alt="carre"></img></Link>
                            </div>
                            <div className="droite">
                                <Link to='/produit/21'><img className="carre" src={Ordicarre3} alt="carre"></img></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Collapse>
            <Collapse in={open3}>
                <Container className="nouv">
                    <Row>
                        <Col sm={12} md={3} lg={3} xl={3}>
                            <div className="gauche">
                                <Link to='/produit/15'><img className="carre" src={Tabcarre} alt="carre"></img></Link>
                            </div>
                            <div className="gauche">
                                <Link to='/produit/12'><img className="carre" src={Tabcarre4} alt="carre"></img></Link>

                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="centre">
                                <Link to='/produit/18'><img className="carre" src={Tabcarre3} alt="carre"></img></Link>
                            </div>
                        </Col>
                        <Col sm={12} md={3} lg={3} xl={3}>
                            <div className="droite">
                                <Link to='/produit/14'><img className="carre" src={Tabcarre2} alt="carre"></img></Link>
                            </div>
                            <div className="droite">
                                <Link to='/produit/11'><img className="carre" src={Tabcarre5} alt="carre"></img></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Collapse>
        </Container>
    )
}

export default Nouveaute
