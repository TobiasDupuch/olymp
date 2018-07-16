<?php
  // echo ("Server: Message received");
    echo "creating new league...";
    $files1 = array_diff(scandir("../data"), array('..', '.'));;
    $newFileName = sprintf("%'04d", count(array_diff(scandir("../data"), array('..', '.'))));
    echo $newFileName;
    $newFile = fopen("../data/".$newFileName.".json", "w");
    fwrite($newFile, $_POST["message"]);
    fclose($newFile);
?>
