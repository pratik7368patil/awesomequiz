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
  let cards = document.getElementsByClassName('card');
  let clips = document.getElementsByClassName('clip');
  let cardBtn = document.getElementsByClassName('card-btn');
  for(let i=0; i<cards.length; i++) {
    cards[i].style.backgroundColor = "rgba(0,0,0,0.2)";
    cards[i].style.color = "lightgray";
  }

  for(let i=0; i<cardBtn.length; i++) {
    cardBtn[i].style.color = "lightgray";
    cardBtn[i].style.border = "2px solid #7386D5";
  }

  for(let i=0; i<clips.length; i++) {
    clips[i].style.color = "black";
  }
}
function normalMode() {
  document.body.style.background = "white";
  document.getElementById('bar').style.background = "white";
  let cards = document.getElementsByClassName('card');
  let clips = document.getElementsByClassName('clip');
  let cardBtn = document.getElementsByClassName('card-btn');
  for(let i=0; i<cards.length; i++) {
    cards[i].style.backgroundColor = "white";
    cards[i].style.color = "black";
  }

  for(let i=0; i<cardBtn.length; i++) {
    cardBtn[i].style.color = "black";
    cardBtn[i].style.border = "2px solid black";
  }

  for(let i=0; i<clips.length; i++) {
    clips[i].style.color = "black";
  }
}


function enable() {
  document.getElementById("prev").setAttribute("href", "#questionslide");
  document.getElementById("next").setAttribute("href", "#questionslide");
}

function cal_parcentage() {
  let anskey = {
    1: "1",
    2: "1",
    3: "3",
    4: "1",
    5: "4",
    
  };

  let ans_1 = document.getElementById("que_1").value;
  let ans_2 = document.getElementById("que_2").value;
  let ans_3 = document.getElementById("que_3").value;
  let ans_4 = document.getElementById("que_4").value;
  let ans_5 = document.getElementById("que_5").value;
  
  let total_correct = 0;

  if (ans_1 === anskey[1]) {
    total_correct += 1;
  }
  if (ans_2 === anskey[2]) {
    total_correct += 1;
  }
  if (ans_3 === anskey[3]) {
    total_correct += 1;
  }
  if (ans_4 === anskey[4]) {
    total_correct += 1;
  }
  if (ans_5 === anskey[5]) {
    total_correct += 1;
  }

  alert(
    `You got ${total_correct}/5 correct! and ${(total_correct / 5) * 100} %`
  );
}
