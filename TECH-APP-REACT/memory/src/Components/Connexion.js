import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../CSS/Connexion.css';
import axios from 'axios';

export class Connexion extends Component{

    constructor(props){
        super(props);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangeMotdepasse = this.onChangeMotdepasse.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTelephone = this.onChangeTelephone.bind(this);
        this.onChangeAdresse = this.onChangeAdresse.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            prenom: '',
            nom: '',
            motdepasse: '',
            email: '',
            telephone: '',
            adresse: ''
        }
    }


    onChangePrenom(e){
        this.setState({
            prenom: e.target.value
        });
    }
    onChangeNom(e){
        this.setState({
            nom: e.target.value
        });
    }
    onChangeMotdepasse(e){
        this.setState({
            motdepasse: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangeTelephone(e){
        this.setState({
            telephone: e.target.value
        });
    }
    onChangeAdresse(e){
        this.setState({
            adresse: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const obj = {
            prenom: this.state.prenom,
            nom: this.state.nom,
            motdepasse: this.state.motdepasse,
            email: this.state.email,
            telephone: this.state.telephone,
            adresse: this.state.adresse
        }
        console.log(obj)

        axios.post("http://localhost/Tech%20App/techapp_insert_user.php", obj).catch(function (error) {
            console.log(error);
        })

        this.setState({
            prenom: '',
            nom: '',
            motdepasse: '',
            email: '',
            telephone: '',
            adresse: ''
        })

    }

    render(){
        return(
        <div className="wrapper">
            <div className="title">
                Inscription
            </div>
            <form onSubmit={this.onSubmit}>
            <div className="form">
                <div className="inputfield">
                    <label>Prénom</label>
                    <input type="text" class="input" value={this.state.prenom} onChange={this.onChangePrenom}/>
                </div>  
                <div className="inputfield">
                    <label>Nom</label>
                    <input type="text" class="input" value={this.state.nom} onChange={this.onChangeNom}/>
                </div>  
                <div className="inputfield">
                    <label>Mot de passe</label>
                    <input type="password" class="input" value={this.state.motdepasse} onChange={this.onChangeMotdepasse}/>
                </div>
                <div className="inputfield">
                    <label>Email</label>
                    <input type="text" class="input" value={this.state.email} onChange={this.onChangeEmail}/>
                </div> 
                <div className="inputfield">
                    <label>Téléphone</label>
                    <input type="text" class="input" value={this.state.telephone} onChange={this.onChangeTelephone}/>
                </div> 
                <div className="inputfield">
                    <label>Adresse</label>
                    <textarea class="textarea" value={this.state.adresse} onChange={this.onChangeAdresse}></textarea>
                </div>
                <div className="inputfield">
                    <input type="submit" value="Register" class="btn" name="boutonregister"/>
                </div>
            </div>
            </form>
        </div>
        )
    }
}

export default Connexion