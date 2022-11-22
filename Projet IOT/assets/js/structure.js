window.onload = () =>{
var btn = document.getElementById('button');
var collapse = document.getElementById("collapse");
var menu = document.getElementById("menu");


//BURGER
menu.style.display = "none";

btn.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        this.classList.add('not-active');        
        menu.style.display = "none";
    } else {
        this.classList.add('active');
        this.classList.remove('not-active');
        menu.style.display = "block";
    }

})

//MENU - QUERY
var x = window.matchMedia("(min-width: 1280px)")

function dispNav(x) {
    if (x.matches) { // If media query matches
      menu.style.display = "block";
      menu.style.width = "250px";
      menu.style.zIndex = "-1";
    } else {
      menu.style.display = "none";
    }
  }

dispNav(x) // Call listener function at run time
x.addListener(dispNav) // Attach listener function on state changes



}
