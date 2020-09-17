<?php

//Lamar a los campos del formutario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

//Datos requeridos para el correo
$destinatario = "maigrojas.dev@gmail.com"; //correo al que vamos a enviar
$asunto = "Contacto desde Blog de JavaScript";

//$contenido = "De: $nombre \n Correo: $correo \n Mensaje: $mensaje";
$contenido = "De: $nombre \n";
$contenido .= "Correo: $correo \n";
$contenido .= "Mensaje: $mensaje";

//Enviando mensaje
mail($destinatario, $asunto, $contenido);
header('Location: mensajeEnviado.html');

?>