<?php
  $fileToEdit = "../data/".$_POST["file"];
  $openFile=fopen($fileToEdit,"w");
  fwrite($openFile,$_POST["message"]);
  fclose($openFile);
?>
