<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
if (isset($_POST['cat'])) {
  if (!empty($_POST['cat'])){
    $cat = strip_tags($_POST['cat']);
    $catFieldset = "Категория: ";
  }
}
if (isset($_POST['subcat'])) {
  if (!empty($_POST['subcat'])){
    $subcat = strip_tags($_POST['subcat']);
    $subcatFieldset = "Подкатегория: ";
  }
}
if (isset($_POST['title'])) {
  if (!empty($_POST['title'])){
    $title = strip_tags($_POST['title']);
    $titleFieldset = "Заголовок: ";
  }
}

if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
  $name = strip_tags($_POST['name']);
  $nameFieldset = "Имя пославшего: ";
  }
}

if (isset($_POST['tel'])) {
  if (!empty($_POST['tel'])){
  $tel = strip_tags($_POST['tel']);
  $telFieldset = "Телефон: ";
  }
}
if (isset($_POST['email'])) {
  if (!empty($_POST['email'])){
  $email = strip_tags($_POST['email']);
  $emailFieldset = "Почта: ";
  }
}
if (isset($_POST['text'])) {
  if (!empty($_POST['text'])){
  $text = strip_tags($_POST['text']);
  $textFieldset = "Комментарий: ";
  }
}


$token = "1221118528:AAEHn3HajgxBr3x_ViR-tPJ-vr89LUGBa1Y";
$chat_id = "-443790680";
$arr = array(
  $catFieldset => $cat,
  $subcatFieldset => $subcat,
  $titleFieldset => $title,
  $nameFieldset => $name,
  $telFieldset => $tel,
  $emailFieldset => $email,
  $textFieldset => $text


);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
  echo '<p class="form__success-msg">Спасибо за отправку вашего сообщения!</p>';
    return true;
} else {
  echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
} else {
header ("Location: /");
}

?>