<?php
  if ($_POST["op"]=="load") {
    $allLeagueFiles = array_values((array_diff(scandir("../data"), array('..', '.'))));
    $finalPack = '{"files": [';
    for ($i=0; $i < count($allLeagueFiles); $i++) {
      $tempLeagueFileData = file_get_contents("../data/".$allLeagueFiles[$i]);
      if ($i < count($allLeagueFiles)-1) {
        $soloPack = '{"filename":"'.$allLeagueFiles[$i].'","content":'.$tempLeagueFileData.'},';
      }
      else {
        $soloPack = '{"filename":"'.$allLeagueFiles[$i].'","content":'.$tempLeagueFileData.'}';
      }
      array_push($finalPack,$soloPack);

      $finalPack = $finalPack.$soloPack;
    }
    $finalPack = $finalPack."]}";
    echo ($finalPack);
    // $loadedContent = file_get_contents("../data/testfile.json");
    // echo $loadedContent;
  }
  else if($_POST["op"]=="new"){
    echo "creating new league...";
    $files1 = array_diff(scandir("../data"), array('..', '.'));;
    $newFileName = sprintf("%'04d", count(array_diff(scandir("../data"), array('..', '.'))));
    echo $newFileName;
    $newFile = fopen("../data/".$newFileName.".json", "w");
    fwrite($newFile, $_POST["data"]);
    fclose($newFile);

  }
  else if ($_POST["op"]=="loadOne") {

    $fileToEdit = file_get_contents("../data/".$_POST["data"]);
    echo $fileToEdit;
  }
  elseif ($_POST["op"]=="savechanges") {
    $fileToEdit = "../data/".$_POST["file"];
    $openFile=fopen($fileToEdit,"w");
    fwrite($openFile,$_POST["data"]);
    fclose($openFile);
  }
  // $loadedFile = fopen("../data/testfile.json", "r");
  //
  // echo $_POST["data"];
  // mkdir("datas");
  // $newFile = fopen("datas/testfile.json", "w");
  // fwrite($newFile, $_POST["data"]);
  // fclose($newFile);
?>
