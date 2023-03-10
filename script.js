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
var lastPrayerTitle = document.getElementById("last-prayer-title")
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
      commandmentTenTitle.style = "border-radius: 0px 0px 10px 10px;";
    }
    if (lastPrayerTitle.classList.contains("active")) {
      lastPrayerTitle.style = "border-radius: 0px;";
    }
    else {
      lastPrayerTitle.style = "border-radius: 0px 0px 10px 10px;";
    }
  });
}

var tooltip = document.getElementById("myTooltip");
var confessionList = document.getElementById("confession-list");

//adding checked items to the confessions list
function addToConfessionList(element, item) {
  if (element.checked == true) {
    confessionList.innerHTML += "<p id='" + item.id + "-on-list'>- " + item.innerText + "</p>";
  }
  else if (element.checked != true) {
    document.getElementById(item.id + "-on-list").remove();
  }
}

var toolTipContainer = document.getElementById("tooltiptext")
var tooltip = document.getElementById("myTooltip");


//Copy list to clipboard
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(confessionList.innerText);
  } 
  catch (err) {
    console.error('Failed to copy: ', err);
  }
  tooltip.innerText = "✓ Copied";
}

//tooltip text
function outFunc() {
  tooltip.innerText = "Copy List";
}
