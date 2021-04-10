import React, { Component } from 'react'
import axios from 'axios';
import RecordList from './RecordList';

export default class affichage extends Component {

    constructor(props) {
        super(props);
        this.state = { elements: [] };
    }
    componentDidMount() {
        axios.get('http://localhost/Tech%20App/affichage.php')
            .then(response => {
                this.setState({ elements: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    usersListe() {
        return this.state.elements.map(function (object, i) {
            return <RecordList obj={object} key={i} />;
        })
    }

    render() {
        const liste = this.state.elements.map((element) => (
            <tr>
                <td>{element.libelle}</td>
            </tr>
        ));
        return (
            <div>
                <h2>Test Affiche theme top culture</h2>
                {/* <tbody>{this.usersListe()}</tbody> */}
                <tbody>
                    {/* <tr>
                        <td>{this.props.obj.libelle}</td>
                    </tr> */}
                    {liste}
                </tbody>
            </div>
        )
    }
}
