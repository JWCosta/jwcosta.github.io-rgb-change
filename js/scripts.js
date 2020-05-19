function changeColor() {
  let red = document.getElementById("rangeRed").value;
  let green = document.getElementById("rangeGreen").value;
  let blue = document.getElementById("rangeBlue").value;

  let color = "Rgb(" + red + "," + green + "," + blue + ")";

  document.getElementById("result").style.background = color;
  document.getElementById("outputRed").value = red;
  document.getElementById("outputGreen").value = green;
  document.getElementById("outputBlue").value = blue;
}

document.getElementById("rangeRed").addEventListener("input", changeColor);
document.getElementById("rangeGreen").addEventListener("input", changeColor);
document.getElementById("rangeBlue").addEventListener("input", changeColor);
