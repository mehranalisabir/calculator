document.addEventListener("DOMContentLoaded", function () {
  // Update date and time
  updateTime();
  setInterval(updateTime, 1000);

  // Calculator functionality
  const result = document.getElementById("result");
  const buttons = document.querySelectorAll(".btn");

  let currentValue = "0";
  let previousValue = "";
  let operator = "";
  let resetScreen = false;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if ((value >= "0" && value <= "9") || value === ",") {
        inputDigit(value);
      } else if (["+", "-", "x", "%"].includes(value)) {
        inputOperator(value);
      } else if (value === "=") {
        calculate();
      } else if (value === "CE") {
        clear();
      } else if (value === "←") {
        backspace();
      } else if (value === "±") {
        toggleSign();
      }

      updateDisplay();
    });
  });

  function inputDigit(digit) {
    if (resetScreen) {
      result.value = "";
      resetScreen = false;
    }

    if (digit === "," && result.value.includes(",")) return;

    if (result.value === "0" && digit !== ",") {
      result.value = digit;
    } else {
      result.value += digit;
    }
  }

  function inputOperator(op) {
    if (operator && !resetScreen) {
      calculate();
    }

    previousValue = result.value;
    operator = op;
    resetScreen = true;
  }

  function calculate() {
    if (!previousValue || resetScreen) return;

    let computation;
    const prev = parseFloat(previousValue);
    const current = parseFloat(result.value);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "%":
        computation = prev % current;
        break;
      default:
        return;
    }

    result.value = computation;
    operator = "";
    previousValue = "";
    resetScreen = true;
  }

  function clear() {
    result.value = "0";
    previousValue = "";
    operator = "";
    resetScreen = false;
  }

  function backspace() {
    if (
      result.value.length === 1 ||
      (result.value.length === 2 && result.value.startsWith("-"))
    ) {
      result.value = "0";
    } else {
      result.value = result.value.slice(0, -1);
    }
  }

  function toggleSign() {
    result.value = (parseFloat(result.value) * -1).toString();
  }

  function updateDisplay() {
    // This function would update the display if needed
  }

  function updateTime() {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    document.getElementById("date").textContent = now.toLocaleDateString(
      "fr-FR",
      options
    );
    document.getElementById("time").textContent = now.toLocaleTimeString(
      "fr-FR",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Update date and time
  updateTime();
  setInterval(updateTime, 1000);

  // ... rest of the calculator functionality ...

  function updateTime() {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    document.getElementById("date").textContent = now.toLocaleDateString(
      "fr-FR",
      options
    );
    document.getElementById("time").textContent = now.toLocaleTimeString(
      "fr-FR",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );
  }
});
