

<?php
include("parametre.php");

$conn = new mysqli($mysql_server, $mysql_user, $mysql_pass, $mysql_db);

if ($conn->connect_error) {
  error_log("Connection to MySQL failed: " . $conn->connect_error);
  return "NOT WORKING";
}

?>
