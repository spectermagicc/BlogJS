<?php

/*

//Lamar a los campos del formutario
$nombre = $_GET['nombre'];
$correo = $_GET['correo'];
$mensaje = $_GET['mensaje'];

echo "iNFORMACION: $nombre, $correo, $mensaje";
//Datos requeridos para el correo
$destinatario = "maigrojas.dev@gmail.com"; //correo al que vamos a enviar
$asunto = "Contacto desde Blog de JavaScript";

//$contenido = "De: $nombre \n Correo: $correo \n Mensaje: $mensaje";
$contenido = "De: $nombre \n";
$contenido .= "Correo: $correo \n";
$contenido .= "Mensaje: $mensaje";

//Enviando mensaje
mail($destinatario, $asunto, $contenido);
header('Location: mensajeEnviado.html');*/

$destino = "maigrojas.dev@gmail.com";

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;

mail($destino, "Contacto", $contenido);
header("Location: mensajeEnviado.html");

?>