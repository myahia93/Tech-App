import React, { Component } from 'react'
import '../CSS/Produit.css';
import carre from './../assets/images/K2-blue.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export class Produit extends Component {

  constructor(props) {
    super(props);
    this.state = { elements: [] };
  }
  componentDidMount() {
    axios.get('http://localhost/Tech%20App/techapp_affiche_produit.php?id=' + this.props.match.params.id)
      .then(response => {
        this.setState({ elements: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  render() {

    var id = parseInt(this.props.match.params.id, 10);
    var typeProd = "";
    if (id >= 1 && id <= 10) {
      typeProd = "SMARTPHONE"
    } else if (id >= 11 && id <= 20) {
      typeProd = "TABLETTE"
    } else if (id >= 21 && id <= 30) {
      typeProd = "ORDINATEUR"
    } else if (id >= 31 && id <= 42) {
      typeProd = "ENCEINTE"
    } else if (id >= 43 && id <= 49) {
      typeProd = "WATCH"
    } else if (id >= 50 && id <= 57) {
      typeProd = "TÉlÉVISEUR"
    }

    const liste = this.state.elements.map((element) => (
      <main class="containerProduit">
        <div class="left-column">
          <img data-image="black" src={element.imageProduit} alt=""></img>
          <img data-image="blue" src={element.imageProduit} alt=""></img>
          <img data-image="red" class="active" src={element.imageProduit} alt=""></img>
        </div>


        <div class="right-column">


          <div class="product-description">
            <span>{typeProd}</span>
            <h1>{element.nomProduit}</h1>
            <p>{element.descriptionProduit}</p>
          </div>


          <div class="product-configuration">

            <div class="cable-config">
              <span>Disponible</span>

            </div>
          </div>


          <div class="product-price">
            <span>{element.prixProduit} €</span>
            <a href="#" class="cart-btn">Ajouter au panier</a>
          </div>
        </div>
      </main>
    ));

    return (
      // <main class="containerProduit">
      //   <div class="left-column">
      //     <img data-image="black" src={carre} alt=""></img>
      //     <img data-image="blue" src={carre} alt=""></img>
      //     <img data-image="red" class="active" src={carre} alt=""></img>
      //   </div>


      //   <div class="right-column">


      //     <div class="product-description">
      //       <span>Smartphone</span>
      //       <h1>Xiaomi Mi 11 256Go Dual Sim 5G Sim Noir</h1>
      //       <p>Le Xiaomi Mi 11 est le porte-étendard de la marque annoncé fin 2020. Il embarque le SoC Qualcomm Snapdragon 888, épaulé par 8 ou 12 Go de RAM et 128 ou 256 Go de stockage. Il possède 3 capteurs photo à l'arrière : le principal à 108 mégapixels, un ultra grand-angle de 13 mégapixels et un objectif macro de 5 mégapixels. Il a une batterie de 4600 mAh compatible charge rapide (55 W), sans fil (50 W) et inversée (10 W).</p>
      //     </div>


      //     <div class="product-configuration">

      //       <div class="cable-config">
      //         <span>Disponible</span>

      //       </div>
      //     </div>


      //     <div class="product-price">
      //       <span>799.99 €</span>
      //       <a href="#" class="cart-btn">Ajouter au panier</a>
      //     </div>
      //   </div>
      // </main>
      <body>
        { liste}
      </body>

    )
  }
}

export default Produit


// function Produit() {
//   return (
//     <main class="containerProduit">
//       <div class="left-column">
//         <img data-image="black" src={carre} alt=""></img>
//         <img data-image="blue" src={carre} alt=""></img>
//         <img data-image="red" class="active" src={carre} alt=""></img>
//       </div>


//       <div class="right-column">


//         <div class="product-description">
//           <span>Smartphone</span>
//           <h1>Xiaomi Mi 11 256Go Dual Sim 5G Sim Noir</h1>
//           <p>Le Xiaomi Mi 11 est le porte-étendard de la marque annoncé fin 2020. Il embarque le SoC Qualcomm Snapdragon 888, épaulé par 8 ou 12 Go de RAM et 128 ou 256 Go de stockage. Il possède 3 capteurs photo à l'arrière : le principal à 108 mégapixels, un ultra grand-angle de 13 mégapixels et un objectif macro de 5 mégapixels. Il a une batterie de 4600 mAh compatible charge rapide (55 W), sans fil (50 W) et inversée (10 W).</p>
//         </div>


//         <div class="product-configuration">

//           <div class="cable-config">
//             <span>Disponible</span>

//           </div>
//         </div>


//         <div class="product-price">
//           <span>799.99 €</span>
//           <a href="#" class="cart-btn">Ajouter au panier</a>
//         </div>
//       </div>
//     </main>
//   )
// }

// export default Produit