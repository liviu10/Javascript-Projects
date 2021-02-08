const listIds = ["number-0", "number-1", "number-2", "number-3", "number-4", "number-5"];
const btn = document.getElementById("generate-btn");
const reset = document.getElementById("reset-btn");
const minValue = 1;
const maxValue = 49;

btn.addEventListener("click", function() {
  let totalNumber = [];
  while (totalNumber.length < 6) {
    let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    if (totalNumber.indexOf(randomNumber) === -1) {
      totalNumber.push(randomNumber);
    }
    let add = true;
    for (let y = 1; y < 49; y++) {
      if (totalNumber[y] == totalNumber) {
        add = false;
      }
    }
  }
  document.getElementById("number-0").textContent = totalNumber[0];
  document.getElementById("number-1").textContent = totalNumber[1];
  document.getElementById("number-2").textContent = totalNumber[2];
  document.getElementById("number-3").textContent = totalNumber[3];
  document.getElementById("number-4").textContent = totalNumber[4];
  document.getElementById("number-5").textContent = totalNumber[5];
});

reset.addEventListener("click", function() {
  let resetNumber = "-";
  for (i = 0; i < listIds.length; i++) {
    document.getElementById("number-" + [i]).textContent = resetNumber;
  }
});