<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

// Переменные важные для настройки почты
$myaddres = 'konmitin@gmail.com';

// Переменный которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];

// Переменные формирубщие содержание письма
$title = 'Заявка на звонок';
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name</br>
<b>Телефон:</b> $phone</br>
";

// Настройка
$mail = new PHPMailer();

$mail->CharSet      = "UTF-8";
$mail->setLanguage('ru', 'phpmailer/language/');

$mail->isSMTP();
$mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
$mail->SMTPAuth     = true;
$mail->Username   = 'i.testovyy@inbox.ru'; // Логин на почте
$mail->Password   = 'F1amgRjUWNMeHniNET4U'; // Пароль на почте
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;
// От кого письмо
$mail->setFrom('i.testovyy@inbox.ru', 'Заявочная'); // Адрес самой почты и имя отправителя
// Получатель письма
$mail->addAddress($myaddres);

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверка отправленности письма
if ($mail->send()) {
  $message = "success";
}
else {
  $message = "error";
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
