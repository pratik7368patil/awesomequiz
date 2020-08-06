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

  let ans_1 = document.getElementById("que_1").value;
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
