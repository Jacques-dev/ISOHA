

<!-- nav CSS -->
<link rel="stylesheet" type="text/css" href="css/navigation.css">

<div id="navigation">

  <?php
    if (isset($_SESSION["log"])) { ?>
      <a class="active" href="Accueil.php">Accueil</a>
      <a href="Profil.php">Mon Profil</a>
      <a href="aPropos.html">A propos</a>
      <?php echo "<div id='nom'>Bonjour ".$_SESSION['log']."</div>";
    }
  ?>

 <div id="logo">
   <img src="images/isoha.png" class="logo">
   <img src="images/efrei.png" class="logo">
 </div>

</div>
