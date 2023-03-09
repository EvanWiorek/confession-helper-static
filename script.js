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
  acc[i].addEventListener("click", function () {
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

//adding checked items to the confessions list
var confessionItem = document.getElementById("confession-item");
var listItem = document.getElementById("list-item")
var confessionList = document.getElementById("confession-list")

document.querySelector('#Checkbox').addEventListener('click', (event) => {
  if (event.target.checked) {
    // confessionItem.style.display = "block";
    confessionList.innerHTML += "<li id='list-item'>Chicken Nuggets</li>";
    listItem.innerText = confessionItem.innerText;
    console.log("Item has been checked");
  }
})