var theLocation = "not set"
var leagueFileToSaveTo;
var loadedLeague = {};


///COMUNICATION/////////////////////////////////////////////////////////////////

function operator(operationUrl, message, callBack) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callBack(this);

    }
  };
  xhttp.open("POST", operationUrl, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("message="+message);
}

function loadAllLeagues (){
  console.log("Requesting all leagues from server");
  operator("operations/loadAllLeagues.php", "phpLoadAll", drawLeagues);

}

///DRAWING FUNCTIONS////////////////////////////////////////////////////////////

function drawLeagues(xhttp){
  console.log(xhttp.responseText);

  document.querySelector(".leagueContainer").innerHTML = "<h1>leagues</h1>"; //clean and add section title

  var masterJson = (JSON.parse(xhttp.responseText));
  for (var i = 0; i < masterJson.files.length; i++) {
    var filename = masterJson.files[i].filename;
    var name = masterJson.files[i].content.name;
    var active = masterJson.files[i].content.active;
    var sport = masterJson.files[i].content.sport;
    var nrOfPlayers = masterJson.files[i].content.players.length;
    var seasons = 0; // change later
    var tournaments = 0; // change later

    var newLeagueCard = document.createElement("div");
    newLeagueCard.className = "leagueCard";
    newLeagueCard.id=filename;
    newLeagueCard.setAttribute("onclick", "openLeague(this)"); // works only if function is given as string
    var newLeagueTitleDiv = document.createElement("div");
    newLeagueTitleDiv.className = "leagueTitle";
    var newLeagueTitle = document.createElement("h1");
    var newLeagueTitleText = document.createTextNode(name);
    newLeagueTitle.appendChild(newLeagueTitleText);
    newLeagueTitleDiv.appendChild(newLeagueTitle);
    newLeagueCard.appendChild(newLeagueTitleDiv);

    var newRightIcon = document.createElement("button");
    newRightIcon.className = "rightIcon";
    newRightIcon.setAttribute("onclick", "editLeague('" + filename + "')");
    var newRightIconSvg = document.createElement("img");
    newRightIconSvg.src = "pen.svg";
    newRightIcon.appendChild(newRightIconSvg);
    newLeagueTitleDiv.appendChild(newRightIcon);

    var newSportTitle = document.createElement("h2");
    var newLeagueSportTitleText = document.createTextNode(sport);
    newSportTitle.appendChild(newLeagueSportTitleText);
    newLeagueCard.appendChild(newSportTitle);

    var newLeagueInfoDiv = document.createElement("div");
    newLeagueInfoDiv.className = "leagueInfo";
    var newLeagueInfoNr = document.createElement("h2");
    newLeagueInfoNr.className = "number";
    newLeagueInfoNr.appendChild(document.createTextNode(nrOfPlayers));
    newLeagueInfoDiv.appendChild(newLeagueInfoNr);
    var newLeagueInfoTitle = document.createElement("h2");
    newLeagueInfoTitle.appendChild(document.createTextNode("players"));
    newLeagueInfoDiv.appendChild(newLeagueInfoTitle);
    newLeagueCard.appendChild(newLeagueInfoDiv);

    var newLeagueInfoDiv = document.createElement("div");
    newLeagueInfoDiv.className = "leagueInfo";
    var newLeagueInfoNr = document.createElement("h2");
    newLeagueInfoNr.className = "number";
    newLeagueInfoNr.appendChild(document.createTextNode("4"));
    newLeagueInfoDiv.appendChild(newLeagueInfoNr);
    var newLeagueInfoTitle = document.createElement("h2");
    newLeagueInfoTitle.appendChild(document.createTextNode("seasons"));
    newLeagueInfoDiv.appendChild(newLeagueInfoTitle);
    newLeagueCard.appendChild(newLeagueInfoDiv);

    var newLeagueInfoDiv = document.createElement("div");
    newLeagueInfoDiv.className = "leagueInfo";
    var newLeagueInfoNr = document.createElement("h2");
    newLeagueInfoNr.className = "number";
    newLeagueInfoNr.appendChild(document.createTextNode("2"));
    newLeagueInfoDiv.appendChild(newLeagueInfoNr);
    var newLeagueInfoTitle = document.createElement("h2");
    newLeagueInfoTitle.appendChild(document.createTextNode("tournaments"));
    newLeagueInfoDiv.appendChild(newLeagueInfoTitle);
    newLeagueCard.appendChild(newLeagueInfoDiv);

    document.querySelector(".leagueContainer").appendChild(newLeagueCard);
  }
}


function drawSeasons (xhttp){
    console.log("start to draw seasons");
    loadedLeague = JSON.parse(xhttp.responseText);
    console.log(loadedLeague);
    //DRAW THE SEASON CARDS BUT FIRST CREATE THE LEAGUE CREATION FUNCTION
    var seasonContainer = document.querySelector(".seasonContainer");
    //empty container
    seasonContainer.innerHTML="<h1>seasons</h1>";
    for (var i = 0; i < loadedLeague.seasons.length; i++) {
      var name = loadedLeague.seasons[i].name;

      var newSeasonCard = document.createElement("div");
      newSeasonCard.className = "card";
      //newSeasonCard.setAttribute("onclick", "openLeague(this)"); // works only if function is given as string
      var newSeasonTitleDiv = document.createElement("div");
      newSeasonTitleDiv.className = "seasonTitle";
      var newSeasonTitle = document.createElement("h1");
      var newSeasonTitleText = document.createTextNode(name);
      newSeasonTitle.appendChild(newSeasonTitleText);
      newSeasonTitleDiv.appendChild(newSeasonTitle);
      newSeasonCard.appendChild(newSeasonTitleDiv);
      seasonContainer.appendChild(newSeasonCard);

      var newSeasonInfoDiv = document.createElement("div");
      newSeasonInfoDiv.className = "leagueInfo";
      var newSeasonInfoNr = document.createElement("div");
      newSeasonInfoNr.className = "medal gold";
      newSeasonInfoDiv.appendChild(newSeasonInfoNr);
      var newSeasonInfoTitle = document.createElement("h2");
      newSeasonInfoTitle.appendChild(document.createTextNode("Player One"));
      newSeasonInfoDiv.appendChild(newSeasonInfoTitle);
      newSeasonCard.appendChild(newSeasonInfoDiv);

      var newSeasonInfoDiv = document.createElement("div");
      newSeasonInfoDiv.className = "leagueInfo";
      var newSeasonInfoNr = document.createElement("div");
      newSeasonInfoNr.className = "medal silver";
      newSeasonInfoDiv.appendChild(newSeasonInfoNr);
      var newSeasonInfoTitle = document.createElement("h2");
      newSeasonInfoTitle.appendChild(document.createTextNode("Player One"));
      newSeasonInfoDiv.appendChild(newSeasonInfoTitle);
      newSeasonCard.appendChild(newSeasonInfoDiv);

      var newSeasonInfoDiv = document.createElement("div");
      newSeasonInfoDiv.className = "leagueInfo";
      var newSeasonInfoNr = document.createElement("div");
      newSeasonInfoNr.className = "medal bronze";
      newSeasonInfoDiv.appendChild(newSeasonInfoNr);
      var newSeasonInfoTitle = document.createElement("h2");
      newSeasonInfoTitle.appendChild(document.createTextNode("Player One"));
      newSeasonInfoDiv.appendChild(newSeasonInfoTitle);
      newSeasonCard.appendChild(newSeasonInfoDiv);
    }




    hideContainer("leagues");
    showContainer("seasons")
    adaptTo("10Seasons");
}


function createNewSeason() {
  //getting data from input fields
  var newSeasonDataName = (document.querySelector("#newSeasonName").value);
  loadedLeague.seasons.push({name:newSeasonDataName,active:true,tournaments:[]});
  console.log(JSON.stringify(loadedLeague));
  operator("operations/saveLeagueEdit.php",JSON.stringify(loadedLeague)+"&file="+leagueFileToSaveTo,seasonAdded)
}


function newLeagueCreated(){
  loadAllLeagues();
  adaptTo("00Leagues");
  hideOverlay("newLeague");
  emptyOverlay();


}


function emptyOverlay() {
  setTimeout(function() {
    var newLeagueDataPlayersTemp = document.querySelectorAll("#playerToSave");
    document.querySelector("#newLeagueName").value = "";
    document.querySelector("#newLeagueSport").value = "";
    document.querySelector("#newSeasonName").value = "";
    for (var i = 0; i < newLeagueDataPlayersTemp.length; i++) {
      newLeagueDataPlayersTemp[i].parentNode.parentNode.removeChild(newLeagueDataPlayersTemp[i].parentNode);
    }
  }, 500);
}


function showOverlay(nameOfOverlay) {
  console.log("fnc showOverlay called")
  if (nameOfOverlay == "newLeague") {
    document.querySelector('.leaguesOverlay').classList.add("visible");
    document.querySelector('.leagueContainer').classList.add("hiddenBehind");
    adaptTo("01NewLeague");
  }
  if (nameOfOverlay == "editLeague") {
    document.querySelector('.leaguesOverlay').classList.add("visible");
    document.querySelector('.leagueContainer').classList.add("hiddenBehind");
    adaptTo("02EditLeague");
  }
  if (nameOfOverlay == "newSeason") {
    document.querySelector('.seasonsOverlay').classList.add("visible");
    document.querySelector('.seasonContainer').classList.add("hiddenBehind");
    adaptTo("11NewSeason");
  }

}

function hideOverlay(nameOfOverlay) {
  console.log("fnc showOverlay called")
  if (nameOfOverlay == "newLeague") {
    document.querySelector('.leaguesOverlay').classList.remove("visible");
    document.querySelector('.leagueContainer').classList.remove("hiddenBehind");
  }
  if (nameOfOverlay == "editLeague") {
    document.querySelector('.leaguesOverlay').classList.remove("visible");
    document.querySelector('.leagueContainer').classList.remove("hiddenBehind");
  }
  if (nameOfOverlay == "newSeason") {
    document.querySelector('.seasonsOverlay').classList.remove("visible");
    document.querySelector('.seasonContainer').classList.remove("hiddenBehind");
  }
}


function hideContainer(nameOfContainer){
  if (nameOfContainer == "leagues") {
    document.querySelector('.leagueContainer').classList.remove("containerVisible");
  }
}

function showContainer(nameOfContainer){
  if (nameOfContainer == "leagues") {
    document.querySelector('.leagueContainer').classList.add("containerVisible");
  }
  if (nameOfContainer == "seasons") {
    document.querySelector('.seasonContainer').classList.add("containerVisible");
  }
}

function changeButton(text,position,whatItDoes) {
  //change it's function
  document.querySelector('.button').setAttribute("onclick", whatItDoes); // works only if function is given as string
  //Postion high or low
  if (position=="high") {
    document.querySelector('.button').classList.add("overlayMode");
  }
  else if(position=="low") {
    document.querySelector('.button').classList.remove("overlayMode");
  }
  var textLength = text.length * 9 + 40;
  document.querySelector('.button').style.color = "#F87153";
  document.querySelector('.button').style.width = "10px";
  setTimeout(function() {
    document.querySelector('.button > p').innerHTML = text;
    document.querySelector('.button').style.width = textLength + "px";
  }, 250);
  setTimeout(function() {
    document.querySelector('.button').style.color = "white";
  }, 500);
}


//MAINBUTTON HAS DIFFERENT CASES DEPENDING ON WHERE WE ARE, THESE ARE TRIGGERED WHEN WE SWTICH LOCATION AND CALL ADAPT TO...that way other things can adapt too later.
function adaptTo(toLocation) {
  theLocation = toLocation;
  switch (theLocation) {
    case "00Leagues":
      changeButton("New League","low","showOverlay('newLeague')");
      break;

    case "01NewLeague":
      changeButton("Create","high","createNewLeague()");
      break;

    case "02EditLeague":
      changeButton("Save","high","saveChangesToLeague()");
      break;

    case "10Seasons":
      changeButton("New Season","low","showOverlay('newSeason')");
      break;

    case "11NewSeason":
      changeButton("Create","high","createNewSeason()");
      break;


    default:
    changeButton("We're lost","low");

  }
}




///INITIAL FUNCTIONS////////////////////////////////////////////////////////////
loadAllLeagues();
adaptTo("00Leagues");


//NEW LOGIC
//ajax function communicate(whatOperation[what file], whatToSend, whatToDoWithTheAnswer)
//example: Fill the overlay for edit mode
//communicate(getLeague.php,leageNr,fillOverlay)
//fillOverlay(xhttp){
//fill the overlay with xhttp data
//show the overlay
//change the Main button to one of it's states
//}

//example2: Save a new league from overlay
//communicate(newLeague.php,leagueData,closeOverlay)
//closeOverlay(xhttp){
//close the overlay
//reload all leagues
//change the main button to one of it's states
//}









// function ajax(url, op, cbFunction, data) {
//   var xhttp;
//   xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       cbFunction(this, op);
//
//     }
//   };
//   xhttp.open("POST", url, true);
//   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   if (op == "load") {
//     xhttp.send("op=load");
//   }
//   if (op == "new") {
//     xhttp.send("op=new&data=" + JSON.stringify(data));
//   }
//   if (op == "loadOne" || op == "fillEditOverlay") {
//     xhttp.send("op=loadOne&data=" + data);
//   }
//   if (op == "savechanges") {
//     xhttp.send("op=savechanges&data=" + JSON.stringify(data) + "&file=" + leagueFileToSaveTo);
//   }
// }



function createNewLeague() {
  //getting data from input fields
  var newLeagueDataName = (document.querySelector("#newLeagueName").value);
  var newLeagueDataSport = (document.querySelector("#newLeagueSport").value);

  var newLeagueDataPlayersTemp = document.querySelectorAll("#playerToSave");
  var newLeageDataPlayers = [];
  for (var i = 0; i < newLeagueDataPlayersTemp.length; i++) {
    newLeageDataPlayers.push(newLeagueDataPlayersTemp[i].innerHTML);
  }
  var newLeagueData = {
    "name": newLeagueDataName,
    "active": true,
    "sport": newLeagueDataSport,
    "players": newLeageDataPlayers,
    "seasons": []
  }
  operator("operations/newLeague.php", JSON.stringify(newLeagueData), newLeagueCreated);
}


function newLeagueCreated(){
  loadAllLeagues();
  adaptTo("00Leagues");
  hideOverlay("newLeague");
  emptyOverlay();

}




function editLeague(leagueFile) {
  leagueFileToSaveTo=leagueFile;
  console.log("the file to edit :"+leagueFileToSaveTo);
  //load one file only
  console.log("Requesting one league from server");
  operator("operations/loadLeague.php", leagueFile, fillEditOverlay);
  event.stopPropagation();
}

function fillEditOverlay(xhttp) {
  loadedFile = JSON.parse(xhttp.responseText);
  console.log("ONE FILE LOADED:");
  //fill overlay with right values
  console.log(loadedFile.name);
  document.querySelector("#newLeagueName").value = loadedFile.name;
  document.querySelector("#newLeagueSport").value = loadedFile.sport;
  for (var i = 0; i < loadedFile.players.length; i++) {
    var newPlayerDiv = document.createElement("div");
    newPlayerDiv.className = "leaguePlayer";
    var newPlayerName = document.createElement("h3");
    newPlayerName.id = "playerToSave";
    newPlayerName.appendChild(document.createTextNode(loadedFile.players[i]));
    newPlayerDiv.appendChild(newPlayerName);
    var newPlayerDeleteButton = document.createElement("button");
    newPlayerDeleteButton.className = "rightIcon";
    newPlayerDeleteButton.type = "button";
    newPlayerDeleteButton.setAttribute("onclick", "removePlayer(this)");
    var newPlayerDeleteImg = document.createElement("img");
    newPlayerDeleteImg.src = "bin.svg";
    newPlayerDeleteButton.appendChild(newPlayerDeleteImg);
    newPlayerDiv.appendChild(newPlayerDeleteButton);
    document.querySelector("#newLeagueForm").insertBefore(newPlayerDiv, document.querySelector("#newPlayerInput"));
    //once filled and everything worked: show overlayMode
    showOverlay("editLeague");
  }
}


function saveChangesToLeague() {
  //leagueFileToSaveTo

  //get all values again
  var newLeagueDataName = (document.querySelector("#newLeagueName").value);
  var newLeagueDataSport = (document.querySelector("#newLeagueSport").value);

  var newLeagueDataPlayersTemp = document.querySelectorAll("#playerToSave");
  var newLeageDataPlayers = [];
  for (var i = 0; i < newLeagueDataPlayersTemp.length; i++) {
    newLeageDataPlayers.push(newLeagueDataPlayersTemp[i].innerHTML);
  }
  //save to
  var newLeagueData = {
    "name": newLeagueDataName,
    "active": true,
    "sport": newLeagueDataSport,
    "players": newLeageDataPlayers,
  }
  operator("operations/saveLeagueEdit.php",JSON.stringify(newLeagueData)+"&file="+leagueFileToSaveTo,leagueChangesSaved)



}


function seasonAdded(xhttp){
  console.log("season added");
  hideOverlay("newSeason");
  emptyOverlay();
  adaptTo("10Seasons");
  loadSeasons();
  //LOAD
}


function leagueChangesSaved(xhttp){
console.log("changes Saved");
hideOverlay("editLeague");
emptyOverlay();
adaptTo("00Leagues");
loadAllLeagues();

}


// function buttonCrossRoads() {
//   switch (theLocation) {
//     case "00leagues":
//       toggleOverlay("newLeague");
//       changeButton("create");
//       theLocation = "01newLeague";
//       break;
//     case "01newLeague":
//       createNewLeague();
//       toggleOverlay("newLeague");
//       changeButton("new league");
//       loadLeagues();
//       theLocation = "00leagues";
//       break;
//     case "02editLeague":
//       saveChangesToLeague();
//       toggleOverlay("newLeague");
//       changeButton("new league");
//       loadLeagues();
//       theLocation = "00leagues";
//       break;
//     default:
//       console.log("WE'RE LOST..")
//
//   }
// }





function addPlayer(textField) {
  if (textField.value != "") {
    var newPlayerDiv = document.createElement("div");
    newPlayerDiv.className = "leaguePlayer";
    var newPlayerName = document.createElement("h3");
    newPlayerName.id = "playerToSave";
    newPlayerName.appendChild(document.createTextNode(textField.value));
    newPlayerDiv.appendChild(newPlayerName);
    var newPlayerDeleteButton = document.createElement("button");
    newPlayerDeleteButton.className = "rightIcon";
    newPlayerDeleteButton.type = "button";
    newPlayerDeleteButton.setAttribute("onclick", "removePlayer(this)");

    var newPlayerDeleteImg = document.createElement("img");
    newPlayerDeleteImg.src = "bin.svg";
    newPlayerDeleteButton.appendChild(newPlayerDeleteImg);
    newPlayerDiv.appendChild(newPlayerDeleteButton);
    document.querySelector("#newLeagueForm").insertBefore(newPlayerDiv, textField);
    textField.value = "";
    textField.focus();
  }
}

var addPlayerInput = document.querySelector("#newPlayerInput");
addPlayerInput.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  //enter key ->13
  if (event.keyCode === 13) {
    addPlayer(addPlayerInput);
  }
})

function removePlayer(playerToRemove) {
  console.log("Removing: "+playerToRemove);
  playerToRemove.parentNode.parentNode.removeChild(playerToRemove.parentNode);
}


function abortOverlay(nameOfOverlay){
  if (nameOfOverlay == "newLeague" || nameOfOverlay == "editLeague") {
    hideOverlay("newLeague");
    hideOverlay("editLeague");
    adaptTo("00Leagues");
    emptyOverlay();
  }
  if (nameOfOverlay == "newSeason") {
    hideOverlay("newSeason");
    hideOverlay("editSeason");
    adaptTo("10Seasons");
    emptyOverlay();
  }

}

function test() {
  alert("hello");
}

function openLeague(clickedCard){
  operator("operations/loadLeague.php",clickedCard.id,drawSeasons)
  leagueFileToSaveTo = clickedCard.id;


}

function loadSeasons(){
  operator("operations/loadLeague.php",leagueFileToSaveTo,drawSeasons)
}
