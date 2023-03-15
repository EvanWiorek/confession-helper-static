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


var confessionList = document.getElementById("confession-list");
var completeList = document.getElementById("complete-list");
var beforeList = document.getElementById("before-list");
var afterList = document.getElementById("after-list");
var customTime = document.getElementById("customTime");
var radiobtn = document.getElementById("custom-time");
var customConfession = document.getElementById("customConfession")

//time since last confession functions
function customTimeSentence() {
  var customTimeValue = customTime.value
  var lowercaseValue = customTimeValue.toLowerCase()
  beforeList.innerHTML = "<p id='before-list-sentence'>Forgive me, Father, for I have sinned. It has been " + lowercaseValue + " since my last confession.</p>";
  radiobtn.checked = true;
}

function customTimeClick() {
  var customTimeValue = customTime.value
  var lowercaseValue = customTimeValue.toLowerCase()
  beforeList.innerHTML = "<p id='before-list-sentence'>Forgive me, Father, for I have sinned. It has been " + lowercaseValue + " since my last confession.</p>";
  radiobtn.checked = true;
}

function beforeListAdd(element, beforeId) {
  if (element.checked == true) {
    if (beforeId.id == "firstTime") {
      beforeList.innerHTML = "<p id='before-list-sentence'>Forgive me, Father, for I have sinned. This is my first confession.</p>";
    }
    else if (beforeId.id == "customTime"){
      beforeList.innerHTML = "<p id='before-list-sentence'>Forgive me, Father, for I have sinned. It has been " + customTime.value + " since my last confession.</p>";
    }
  }
}

//adding checked items to the confessions list
function addToConfessionList(element, item) {
  afterList.innerHTML = "<p>I am sorry for these and any sins I may be forgetting.</p>";
  if (element.checked == true) {
    confessionList.innerHTML += "<p id='" + item.id + "-on-list'>- " + item.innerText + "</p>";
  }
  else {
    document.getElementById(item.id + "-on-list").remove();
  }
  if (confessionList.innerText == "") {
    afterList.style = "display: none;"
  }
  else if (confessionList.innerText != "") {
    afterList.style = "display: block;";
  }
}

//adding custom sins to the list
function customConfessionSentence() {
  confessionList.innerHTML += "<p class='custom-confession' onclick='removeFromList(this)'>- " + customConfession.value + "</p>";
}

function removeFromList(element) {
  element.remove();
}

//Copy list to clipboard
var tooltip = document.getElementById("myTooltip");
var prayerSpan = document.getElementById("prayerCopy")

const copyConfessionList = async () => {
  try {
    await navigator.clipboard.writeText(completeList.innerText);
  } 
  catch (err) {
    console.error('Failed to copy: ', err);
  }
  tooltip.innerText = "✓ Copied";
}

const copyPrayer = async () => {
  try {
    await navigator.clipboard.writeText(completeList.innerText);
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

// function displayPrayerCopyButton(element) {
//   prayerSpan.style = "display: flex;"
// }

// function hidePrayerCopyButton(element) {
//   prayerSpan.style = "transition: ease-out 2s;"
//   prayerSpan.style = "display: none;"
// }


// " onmouseout="hidePrayerCopyButton(this)"