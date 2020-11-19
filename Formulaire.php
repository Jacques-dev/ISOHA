

<?php
include("connexion.php");
session_start();
?>

<!DOCTYPE html>
<html lang="fr">

	<head>
		<meta charset="utf-8">
		<title>ISOHA</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
		<!-- Pages CSS -->
		<link rel="stylesheet" type="text/css" href="css/formulaire.css">
		<!-- icone CSS -->
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
		<!-- jQuery library -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>

  <body>

		<nav><?php include("Navigation.php"); ?></nav>

		<div id="connexion">

			<div class='box'>
			  <div class='box-form'>
			    <div class='box-login-tab'></div>
			    <div class='box-login-title'>
			      <div class='i i-login'></div>
						<h2>Identification</h2>
			    </div>
			    <div class='box-login'>
			      <div class='fieldset-body' id='login_form'>
			        <button onclick="openLoginInfo();" class='b b-form i i-more' title='Mais Informações'></button>

							<form method="post" action="Formulaire.php">

				      	<p class='field'>
				          <label for='user'>IDENTIFIANT</label>
				          <input type="text" name="login" placeholder="..." id="id" required/>
				      	</p>

				    	  <p class='field'>
					        <label for='pass'>MOT DE PASSE</label>
					        <input type="password" name="password" placeholder="..." id="mdp" required/>
				        </p>

				      	<input type="submit" name="submit" value='Connexion' id="submit" />

							</form>

							<?php
							if (isset($_POST["submit"])) {
									if (!empty($_POST["login"]) && !empty($_POST["password"])) {

											$result=$conn->query("select login from Profil");
											while($ligne=$result->fetch()) {

													if ($ligne[0] == $_POST['login']) {
															$_SESSION['log'] = $ligne[0];
													}
											}
									}
							}

							if (isset($_SESSION["log"])) {
								header('Location: Accueil.php');
								exit();
							} ?>

			      </div>
			    </div>
			  </div>
			  <div class='box-info'>
					<p>
						<button onclick="closeLoginInfo();" class='b b-info i i-left' title='Back to Sign In'></button>
						<h3>Besoin d'aide?</h3>
					</p>
					<div class='line-wh'></div>
					<button onclick="" class='b-support' title='Forgot Password?'>Mot de passe oublié</button>
					<button onclick="" class='b-support' title='Contact Support'>Nous contacter</button>
					<div class='line-wh'></div>
					<button onclick="" class='b-cta' title='Sign up now!'>Créer un compte</button>
				</div>
			</div>


			<!-- <form method="post" action="professor.php">
					<input type="text" name="login" placeholder="Identifiant" class="input" required/>

					<input type="password" name="password" placeholder="Mot de passe" class="input" required/>

					<input type="submit" name="submit" class="submit" />
			</form> -->
    </div>

		<script>
			function openLoginInfo() {
			    $(document).ready(function(){
			    	$('.b-form').css("opacity","0.01");
			      $('.box-form').css("left","-37%");
			      $('.box-info').css("right","-37%");
			    });
			}

			function closeLoginInfo() {
			    $(document).ready(function(){
			    	$('.b-form').css("opacity","1");
			    	$('.box-form').css("left","0px");
			      $('.box-info').css("right","-5px");
			    });
			}

			$(window).on('resize', function(){
			      closeLoginInfo();
			});
		</script>

  </body>
</html>
