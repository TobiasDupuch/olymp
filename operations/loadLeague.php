<?php
  $fileToEdit = file_get_contents("../data/".$_POST["message"]);
  echo $fileToEdit;
?>
