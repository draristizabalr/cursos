<?php 
  $name = "Miguel";
  $isDev = true;
  $age = 44;

  $output = "Hola $name, con una edad de $age. 🤣";

  define('LOGO_URL', 'https://pngimg.com/uploads/php/php_PNG43.png')
  // var_dump($name);
  // var_dump($isDev);
  // var_dump($age);
?>

<h1>
  <?=
  $output;
  ?>
</h1>
<img src="<?= LOGO_URL ?>" alt="PHP Logo" width="200">
<style>
  :root{
    color-scheme: light dark;
  }

  body{
    background-color: grid;
    place-content: center;
  }
</style>