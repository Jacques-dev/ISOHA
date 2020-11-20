
<?php
	session_start();
?>

<!DOCTYPE html>
<html lang="fr">

	<head>
		<meta charset="utf-8">
		<title>ISOHA</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
		<!-- nav CSS -->
		<link rel="stylesheet" type="text/css" href="css/accueil.css">
		<!-- icone CSS -->
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
		<!-- jQuery library -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>

  <body>

		<nav><?php include("Navigation.php"); ?></nav>



		<div id="accueil">

			<main id="main">
				<form method="post" enctype="multipart/form-data">

					<label for="file" id="button">
						<i class="fas fa-search"></i>
					</label>
					<input type="file" name="file" id="file" accept=".jpg, .jpeg, .png" required/>

			 	</form>
			</main>

    </div>



		<script>

			var input = document.getElementById('file');
			input.addEventListener('change', verif);

			function verif() {
				var curFile = input.files;
				if (curFile.length != 0) {
					document.getElementById("main").style.background = "#68e557";
	        // window.alert("bien vu mon khey");
				} else {
		      // window.alert("tu te fou de moi ?\n où est le fichier ?!");
					document.getElementById("main").style.background = "#e55757";
				}
			}
		</script>

  </body>
</html>
