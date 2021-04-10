<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');


require 'techapp_db_connexion.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $req = $bdd->prepare("SELECT * FROM produit WHERE categorieProduit = ?");
    $req->execute([$id]);
    $result = $req->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
} else {
    echo "marche pas";
}
