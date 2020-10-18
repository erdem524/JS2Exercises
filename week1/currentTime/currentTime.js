// Exercise 4: What's the time?



function myTimer() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  document.getElementById("demo").innerHTML = time;
}
const Interval = setInterval(myTimer, 1000);
function myStopFunction() {
  clearInterval(interval);
}


