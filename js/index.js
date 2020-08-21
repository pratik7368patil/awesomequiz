function checkDark() {
  if(document.body.style.backgroundColor === "rgb(27, 27, 27)") {
    normalMode();
  } else {
    dark();
  }
}

function dark() {
  document.body.style.backgroundColor = "#1B1B1B";
  document.body.style.backgroundImage = 'url("./images/mainsvg.svg")';
  document.getElementById('bar').style.background = "#7386D5";
  document.getElementById('main-btn').style.background = "lightgray";
  document.getElementById('main-data').style.color = "lightgray";
}
function normalMode() {
  document.body.style.backgroundColor = "white";
  document.body.style.backgroundImage = 'url("./images/quiznewback.svg")';
  document.getElementById('bar').style.background = "white";
  document.getElementById('main-btn').style.background = "white";
  document.getElementById('main-data').style.color = "black";
}


