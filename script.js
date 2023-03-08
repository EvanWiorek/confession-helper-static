//Scaling transition for desktop navbar link elements
function scale(element, value) {
  element.style.transform = "scale(" + value + ")";
}

//Mobile Navbar Functionality
function mobileNav() {
  var x = document.getElementById("mobile-links");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

//Accordian Controls
var acc = document.getElementsByClassName("accordion");
var commandmentTenTitle = document.getElementById("commandment-10-title")
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } 
    else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    if (commandmentTenTitle.classList.contains("active")) {
      commandmentTenTitle.style = "border-radius: 0px;";
    }
    else {
      this.style = "";
    }
  });
}