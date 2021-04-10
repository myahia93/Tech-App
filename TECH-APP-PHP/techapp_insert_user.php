<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require 'techapp_db_connexion.php';

ini_set("allow_url_fopen", true);
$rest_json = file_get_contents("php://input");
$_GET = json_decode($rest_json, true);

if(isset($_POST['prenom'])) {
    echo "oui";
}else {
    echo "non";
}
// $postdata = file_get_contents("php://input");

// if(isset($postdata) && !empty($postdata)){
//     $request = json_encode($postdata);

//     print_r($request);

//     $prenom = $request->prenom;
//     $nom = $request->nom;
//     $motdepasse = $request->motdepasse;
//     $email = $request->email;
//     $telephone = $request->telephone;
//     $adresse = $request->adresse;

//     $sql = 'INSERT INTO utilisateur (idUtilisateur, nomUtilisateur, prenomUtilisateur, emailUtilisateur, adresseUtilisateur, telephoneUtilisateur , mdpUtilisateur) VALUES (default, :nom, :prenom, :maila, :adresse, :tel, :mdp)';
// 	$req = self::$bdd -> prepare($sql);
// 	$req -> bindParam(':nom', $nom);
// 	$req -> bindParam(':prenom', $prenom);
// 	$req -> bindParam(':adresse', $adresse);
// 	$req -> bindParam(':tel', $tel);
// 	$req -> bindParam(':login', $pseudo);
// 	$req -> bindParam(':mdp', $mdp);
// 	$req -> bindParam(':maila',$email);
// 	$req -> execute();

// }
// else{
//     echo "pas ok";
// }
