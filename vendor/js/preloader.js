var preLoad;

function preLoader() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.opacity = 0;
  document.getElementById("wrapper").style.opacity = 1;
}