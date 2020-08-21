function checkDark() {
  let x = 'rgb(27, 27, 27)'
  if(document.body.style.background === x) {
    normalMode();
  } else {
    dark();
  }
}

function dark() {
  document.body.style.background = "#1B1B1B";
  document.getElementById('bar').style.background = "#7386D5";
  document.getElementById('main-head').style.color = "lightgray";
  let cards = document.getElementsByClassName('card');
  let cardBtn = document.getElementsByClassName('card-btn');
  for(let i=0; i<cards.length; i++) {
    cards[i].style.backgroundColor = "rgba(0,0,0,0.2)";
    cards[i].style.color = "lightgray";
    cardBtn[i].style.color = "lightgray";
    cardBtn[i].style.border = "2px solid #7386D5";
  }
}
function normalMode() {
  document.body.style.background = "white";
  document.getElementById('bar').style.background = "white";
  document.getElementById('main-head').style.color = "black";
  let cards = document.getElementsByClassName('card');
  let cardBtn = document.getElementsByClassName('card-btn');
  for(let i=0; i<cards.length; i++) {
    cards[i].style.backgroundColor = "white";
    cards[i].style.color = "black";
    cardBtn[i].style.color = "black";
    cardBtn[i].style.border = "2px solid black";
  }
}
