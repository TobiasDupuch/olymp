<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&amp;subset=latin-ext" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

     <meta http-equiv="refresh" content="3000" />
  </head>
  <body>
    <div class="container seasonContainer">
      <h1>seasons</h1>
    </div>
    <div class="container leagueContainer containerVisible">
      <h1>leagues</h1>
      <div class="leagueCard">
        <div class="leagueTitle">
          <h1>league name</h1>
          <div class="rightIcon">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.91414 0C9.65826 0 9.40236 0.0977187 9.2071 0.292969L8.50007 1L11.0001 3.5L11.7071 2.79297C12.0976 2.40247 12.0976 1.76941 11.7071 1.37891L10.6212 0.292969C10.4259 0.0977187 10.17 0 9.91414 0ZM7.50006 2L1.50001 8L2.25002 8.25L2.50002 9.5L3.75003 9.75L4.00003 10.5L10.0001 4.5L7.50006 2ZM0.576179 10.0762L0.0185576 11.6543C0.00615254 11.6847 -0.000152234 11.7172 2.79089e-06 11.75C2.79089e-06 11.8163 0.0263423 11.8799 0.0732267 11.9268C0.120111 11.9737 0.1837 12 0.250005 12C0.281047 12.0001 0.311845 11.9945 0.340826 11.9834L1.92385 11.4238L0.576179 10.0762Z" fill="#F87153"/>
            </svg>
          </div>
        </div>
        <h2>Tabletennis</h2>
        <div class="leagueInfo">
          <h2 class="number">8</h2>
          <h2>players</h2>
        </div>
        <div class="leagueInfo">
          <h2 class="number">3</h2><h2>seasons</h2>
        </div>
        <div class="leagueInfo">
          <h2 class="number">14</h2><h2>tournaments</h2>
        </div>
      </div>




    </div>


    <div class="leaguesOverlay overlay">
      <div class="leagueTitle">
        <h1>new league</h1>
        <button onclick="abortOverlay('newLeague')" class="rightIcon">
          <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L10.0182 10.0182M10.0183 0.332522L9.69802e-05 10.3507" transform="translate(1.80176 1.64429)" stroke="#F87153" stroke-width="2.3" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <form id="newLeagueForm" method="post">
        <input type="text" id="newLeagueName" name="league name" placeholder="league name">
        <input type="text" id="newLeagueSport" name="sport" placeholder="sport">

        <!-- <div class="leaguePlayer">
          <h3>Player Name</h3>
          <div class="rightIcon">
            <img src="bin.svg" alt="">

          </div>
        </div> -->

        <input id="newPlayerInput" type="text" name="" placeholder="add player" onblur="addPlayer(this)" >
        <!-- <div class="buttonContainer">
          <div class="button">
            <p>done</p>
          </div>
        </div> -->
      </form>

    </div>


    <div class="seasonsOverlay overlay">
      <div class="seasonTitle">
        <h1>new season</h1>
        <button onclick="abortOverlay('newSeason')" class="rightIcon">
          <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L10.0182 10.0182M10.0183 0.332522L9.69802e-05 10.3507" transform="translate(1.80176 1.64429)" stroke="#F87153" stroke-width="2.3" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <form id="newSeasonForm" method="post">
        <input type="text" id="newSeasonName" name="season name" placeholder="season name">
        

      </form>

    </div>

    <div class="buttonContainer">
      <button class="button" onclick="buttonCrossRoads()">
        <p>new league</p>
      </button>
    </div>

    <div class="backButtonContainer">
      <button class="backButton" name="backButton">
        <img src="back.svg" alt="">
      </button>

    </div>
  </body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="script.js" charset="utf-8"></script>
</html>
