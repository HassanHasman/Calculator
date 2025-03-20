const operations = document.querySelector(".calc-input");
const display = document.querySelector(".text-disp");

const clearDisp = function () {
  display.value = "";
};

operations.addEventListener("click", (e) => {
  if (!e.target.value) return;

  if (e.target.value !== "=" && e.target.value !== "DE") {
    display.value += e.target.value;
  }

  if (e.target.value === "=" && display.value) {
    display.value = eval(display.value);
  }

  if (e.target.value === "AC") clearDisp();

  if (e.target.value === "DE" && display.value) {
    display.value = display.value.slice(0, -1);
  }
});

// display.addEventListener("keydown", (e) => {
//   if (!(e.key.charCodeAt() >= 43 && e.key.charCodeAt() <= 57)) {
//     alert("Please enter numerical values.");
//     if (display.value) clearDisp();
//   }
// });
