function checkDark() {
  if(document.getElementById('content').style.background === "rgb(27, 27, 27)") {
    normalMode();
  } else {
    dark();
  }
}

function dark() {
  document.getElementById('content').style.background = "#1B1B1B";
  document.getElementById('bar').style.background = "#7386D5";
  document.getElementById('left-arrow').style.fill = "black";
  document.getElementById('main-head').style.color = "lightgray";
  document.getElementById('all_question').style.background = "rgba(0,0,0,0.2)";
  document.getElementById('all_question').style.color = "lightgray";
}
function normalMode() {
  document.getElementById('content').style.background = "white";
  document.getElementById('bar').style.background = "white";
  document.getElementById('left-arrow').style.fill = "#7386D5";
  document.getElementById('main-head').style.color = "#7386D5";
  document.getElementById('all_question').style.background = "whitesmoke";
  document.getElementById('all_question').style.color = "black";
}

function cal_parcentage() {
  let anskey = {
    1: "2",
    2: "3",
    3: "1",
    4: "2",
    5: "4",
    6: "1",
    7: "3",
    8: "4",
    9: "4",
    10: "4"
  };

  let ans_1 = document.getElementById("que_1").value;
  let ans_2 = document.getElementById("que_2").value;
  let ans_3 = document.getElementById("que_3").value;
  let ans_4 = document.getElementById("que_4").value;
  let ans_5 = document.getElementById("que_5").value;
  let ans_6 = document.getElementById("que_6").value;
  let ans_7 = document.getElementById("que_7").value;
  let ans_8 = document.getElementById("que_8").value;
  let ans_9 = document.getElementById("que_9").value;
  let ans_10 = document.getElementById("que_10").value;

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
  if (ans_6 === anskey[6]) {
    total_correct += 1;
  }
  if (ans_7 === anskey[7]) {
    total_correct += 1;
  }
  if (ans_8 === anskey[8]) {
    total_correct += 1;
  }
  if (ans_9 === anskey[9]) {
    total_correct += 1;
  }
  if (ans_10 === anskey[10]) {
    total_correct += 1;
  }

  let result = document.getElementById("result");
  result.innerHTML = `Your result : ${total_correct} / 10`;
  result.style.fontSize = "25px";
  if (total_correct < 4) {
    result.style.color = "red";
  } else if (total_correct > 4 && total_correct < 6) {
    result.style.color = "orange";
  } else {
    result.style.color = "green";
  }
  alert(
    `You got ${total_correct}/10 correct! and ${(total_correct / 10) * 100} %`
  );
}
