<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

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
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet      = "UTF-8";
  $mail->SMTPAuth     = true;
  $mail->setLanguage('ru', 'phpmailer/language/');
  //$mail->SMTPDebug = 2;
  $mail->Debugoutput  = function($str, $level) {$GLOBALS['status'][] = $str;};

    // // Настройка почты
    // $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    // $mail->Username   = 'i.testovyy'; // Логин на почте
    // $mail->Password   = 'jk11dfqq'; // Пароль на почте
    // $mail->SMTPSecure = 'ssl';
    // $mail->Port       = 465;
    // От кого письмо
    $mail->setFrom('i.testovyy@inbox.ru', 'Igor'); // Адрес самой почты и имя отправителя
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

$response = ['message', $message];

header('Content-type: application/json');
echo json_encode($response);

 ?>
