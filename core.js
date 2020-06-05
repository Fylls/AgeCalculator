// these variables will be given by user
let inputYear;
let inputMonth;
let inputDay;

// f() onClick "Reset" button
function reset() {
  const elements = ["seconds", "minutes", "hours", "days"];

  elements.forEach((element) => {
    document.getElementById(element).remove();
  });
}

// f() onclick "Calculate" button
function ageHandler() {
  try {
    // resets previous input without breaking the whole code
    reset();
  } catch (err) {
    console.log(err);
  }

  const today = getToday();
  const birthday = getBirthday();

  const seconds = (today.getTime() - birthday.getTime()) / 1000;

  const timeValues = [
    {
      type: "seconds",
      val: seconds,
    },
    {
      type: "minutes",
      val: seconds / 60,
    },
    {
      type: "hours",
      val: seconds / 3600,
    },
    {
      type: "days",
      val: seconds / 86400,
    },
  ];

  timeValues.forEach((element) => {
    domManipulation(element);
  });
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
    "you are " + obj.val + " " + obj.type + " old" //`you are ${obj.val} ${obj.type} old`
  );
  p.setAttribute("id", obj.type);
  p.appendChild(textAnswer);
  const id = obj.type + "Output";
  document.getElementById(id).appendChild(p);
}
