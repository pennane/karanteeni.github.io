// Set the date we're counting down to
const countDownDate = new Date("Nov 6, 2020 18:00:00 GMT+02:00").getTime();

let atm = new Date().getTime();
let distance = countDownDate - atm;

// If the timespan is already passed, handle the error properly
if (distance <= 0) {
  try {
    document.getElementById('mapreset').remove();
  } catch (error) {
    
  }
} else {
  setInterval(function() {

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="mapreset"
    document.getElementById("mapreset").innerHTML = days + " päivää " + hours + " tuntia "
    + minutes + " minuuttia " + " ja " + seconds + " sekuntia ";
  
  }, 1000);
}
