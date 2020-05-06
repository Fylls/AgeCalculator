// these variables will be given by user
let inputYear;
let inputMonth;
let inputDay;

// f() onclick "Reset" button
function reset() {
  document.getElementById("seconds").remove();
  document.getElementById("minutes").remove();
  document.getElementById("hours").remove();
  document.getElementById("days").remove();
}

// f() onclick "Calculate" button
function ageHandler() {
  try {
    // resets previous input without
    // breaking the whole code
    reset();
  } catch (err) {
    console.log(err);
  }

  const today = getToday();
  const birthday = getBirthday();
  console.log(birthday);
  console.log(today);

  const secondsVal = (today.getTime() - birthday.getTime()) / 1000;
  const minutesVal = secondsVal / 60;
  const hoursVal = minutesVal / 60;
  const daysVal = hoursVal / 24;

  const objS = {
    type: "seconds",
    val: secondsVal,
  };
  const objM = {
    type: "minutes",
    val: minutesVal,
  };
  const objH = {
    type: "hours",
    val: hoursVal,
  };
  const objD = {
    type: "days",
    val: daysVal,
  };

  domManipulation(objS);
  domManipulation(objM);
  domManipulation(objH);
  domManipulation(objD);
}

function getToday() {
  d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  return new Date(year, month, day);
}

function getBirthday() {
  const input = document.getElementById("myDate").value;
  return separateTimeFactors(input);
}

// this f() creates a Date obj from the string extracted in the HTML input
function separateTimeFactors(string) {
  const stringArray = string.split("-");
  const birthday = new Date(stringArray[0], stringArray[1], stringArray[2]);
  return birthday;
}

// dynamic f() appending paragraph to dynamic div
function domManipulation(obj) {
  const p = document.createElement("p");
  const textAnswer = document.createTextNode(
    "you are " + obj.val + " " + obj.type + " old"
  );
  p.setAttribute("id", obj.type);
  p.appendChild(textAnswer);
  const id = obj.type + "Output";
  document.getElementById(id).appendChild(p);
}
