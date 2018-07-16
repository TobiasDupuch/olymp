<?php
  // echo ("Server: Message received");
  if ($_POST["message"]=="phpLoadAll") {

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
?>
