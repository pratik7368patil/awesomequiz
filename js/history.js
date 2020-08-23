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

  let temp_1 = document.querySelector('input[name="ans_1"]:checked');
  let temp_2 = document.querySelector('input[name="ans_2"]:checked');
  let temp_3 = document.querySelector('input[name="ans_3"]:checked');
  let temp_4 = document.querySelector('input[name="ans_4"]:checked');
  let temp_5 = document.querySelector('input[name="ans_5"]:checked');

  let ans_1 = temp_1 != null ? temp_1.value : 0;
  let ans_2 = temp_2 != null ? temp_2.value : 0;
  let ans_3 = temp_3 != null ? temp_3.value : 0;
  let ans_4 = temp_4 != null ? temp_4.value : 0;
  let ans_5 = temp_5 != null ? temp_5.value : 0;
  
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
