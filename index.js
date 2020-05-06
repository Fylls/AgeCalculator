//Challenge 1: Your Age in Days

function ageInDaysHandler() {
  const birthYear = prompt("what year where you born");
  const ageInDays = (2020 - birthYear) * 365;
  const h1 = document.createElement("h1");
  const textAnswer = document.createTextNode(
    "you are " + ageInDays + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
