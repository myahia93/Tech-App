import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import carre from '../Nouveautés/carre.jpg';
import '../CSS/galerieProduit.css';
import axios from 'axios';

export class galerieProduit extends Component {
    constructor(props) {
        super(props);
        this.state = { elements: [], test: [] };
    }
    componentDidMount() {
        axios.get('http://localhost/Tech%20App/techapp_galerie_produit.php?id=' + this.props.match.params.id)
            .then(response => {
                this.setState({ elements: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost/Tech%20App/affichage.php')
            .then(response => {
                this.setState({ test: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        var total = 0;
        // for (var i = 0; i < this.state.elements.length; i++) {
        //     total += parseInt(this.state.elements[i].idTheme, 10);
        // }
        for (var i = 0; i < this.state.test.length; i++) {
            total += parseInt(this.state.test[i].idUtilisateur, 10);
        }
        const liste = this.state.elements.map((element) => (
            <Col className="col_galerie" sm={12} md={12} lg={12} xl={6}>
                <Link className="text-link" to={'/produit/' + element.idProduit}>
                    <figure class="figure">
                        <img class="img_galerie" src={element.imageProduit}></img>
                        <figcaption>
                            {element.nomProduit}<br />{element.prixProduit} €
                        </figcaption>
                    </figure>
                </Link>
            </Col>
        ));

        var nb = this.state.elements.map((element) => (element.note));

        var prod = this.props.match.params.id;
        var prodFinale;
        switch (prod) {
            case "1":
                prodFinale = "Smartphones"
                break;
            case "2":
                prodFinale = "Tablettes"
                break;
            case "3":
                prodFinale = "Ordinateurs"
                break;
            case "4":
                prodFinale = "Enceintes"
                break;
            case "5":
                prodFinale = "Watchs"
                break;
            case "6":
                prodFinale = "Téléviseurs"
                break;
        }
        return (
            <Container className="galerie">
                <h1>{prodFinale}</h1>
                <Row className="justify-content-md-center">
                    {/* <Col className="col_galerie" sm={12} md={6} lg={6} xl={4}>
                        <Link className="text-link">
                            <figure class="figure">
                                <img class="img_galerie" src={carre}></img>
                                <figcaption>
                                    Iphone X<br />630€
                                </figcaption>
                            </figure>
                        </Link>
                    </Col> */}
                    {liste}
                </Row>
            </Container>
        )
    }
}

export default galerieProduit
