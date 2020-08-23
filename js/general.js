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
    1: "3",
    3: "4",
    4: "1",
    5: "2",
    6: "3",
    7: "1",
    8: "2",
    9: "2",
    10: "4"
  };

  let temp_1 = document.querySelector('input[name="ans_1"]:checked');
  let temp_3 = document.querySelector('input[name="ans_3"]:checked');
  let temp_4 = document.querySelector('input[name="ans_4"]:checked');
  let temp_5 = document.querySelector('input[name="ans_5"]:checked');
  let temp_6 = document.querySelector('input[name="ans_6"]:checked');
  let temp_7 = document.querySelector('input[name="ans_7"]:checked');
  let temp_8 = document.querySelector('input[name="ans_8"]:checked');
  let temp_9 = document.querySelector('input[name="ans_9"]:checked');
  let temp_10 = document.querySelector('input[name="ans_10"]:checked');

  let ans_1 = temp_1 != null ? temp_1.value : 0;
  let ans_3 = temp_3 != null ? temp_3.value : 0;
  let ans_4 = temp_4 != null ? temp_4.value : 0;
  let ans_5 = temp_5 != null ? temp_5.value : 0;
  let ans_6 = temp_6 != null ? temp_6.value : 0;
  let ans_7 = temp_7 != null ? temp_7.value : 0;
  let ans_8 = temp_8 != null ? temp_8.value : 0;
  let ans_9 = temp_9 != null ? temp_9.value : 0;
  let ans_10 = temp_10 != null ? temp_10.value : 0;

  let total_correct = 0;

  if (ans_1 === anskey[1]) {
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
  result.innerHTML = `Your result : ${total_correct + 1} / 10`;
  result.style.fontSize = "25px";
  if (total_correct + 1 < 4) {
    result.style.color = "red";
  } else if (total_correct + 1 > 4 && total_correct + 1 < 6) {
    result.style.color = "orange";
  } else {
    result.style.color = "green";
  }
  alert(
    `You got ${total_correct + 1}/10 correct! and ${
      ((total_correct + 1) / 10) * 100
    } %`
  );
}
