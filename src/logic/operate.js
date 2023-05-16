import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(
    numberTwo || (operation === "÷" || operation === "x" ? "1" : "0"),
  ); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    if (two === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  if (operation === "ln") {
    return one.times(two).toString();
  }
  if (operation === "e") {
    return one.toExponential(two).toString();
  }
  if (operation === "cos") {
    return one.times(two).toString();
  }
  if (operation === "sin") {
    return one.times(two).toString();
  }
  if (operation === "tan") {
    return one.times(two).toString();
  }
  if (operation === "sqrt") {
    return one.sqrt(two).toString();
  }
  if (operation === "abs") {
    return one.abs(two).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}
