<?php

function connexion()
{
    $dns = "mysql:host=localhost; dbname=tech_app_test";
    $user = "Mohcine";
    $password = "root93";
    try {
        $bdd = new PDO($dns, $user, $password);
    } catch (PDOException $e) {
        echo "Non co";
    }
    return $bdd;
}

$bdd = connexion();
