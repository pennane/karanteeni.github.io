// Set the date we're counting down to
const countDownDate = new Date("Nov 6, 2020 18:00:00 GMT+02:00").getTime();

let now = new Date().getTime();
let distance = countDownDate - now;

// Update the count down every 1 second
const x = setInterval(function() {

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="mapreset"
  document.getElementById("mapreset").innerHTML = days + " päivää " + hours + " tuntia "
  + minutes + " minuuttia " + " ja " + seconds + " sekuntia ";

}, 1000);

if (distance < 0) {
  document.getElementById("mapreset").remove();
  clearInterval(x);
}