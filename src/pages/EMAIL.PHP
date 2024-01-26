<?php
// Recibir datos del formulario
$to = $_POST['to'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$headers = 'From: tucorreo@gmail.com'; // Reemplaza con tu dirección de correo

// Enviar correo electrónico
$mail_success = mail($to, $subject, $message, $headers);

// Verificar si el correo fue enviado con éxito
if ($mail_success) {
    echo "Correo enviado con éxito";
} else {
    echo "Error al enviar el correo";
}
?>
