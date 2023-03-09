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
function addToConfessionList(element, item) {
  var confessionListContainer = document.getElementById("confession-list-container");
  var confessionList = document.getElementById("confession-list");
  if(element.checked == true) {
    // console.log(true);
    // console.log(item)
    confessionList.innerHTML += "<p id='"+item.id+"-on-list'>" + item.innerText + "</p>";
    // console.log(confessionList)
    // console.log(document.getElementById(item.id+"-on-list"))
    // confessionListContainer.style = "backdrop-filter: blur(15px);";
  }
  else if(element.checked != true) {
    document.getElementById(item.id+"-on-list").remove();
  }
}

  // document.getElementById('examination-of-conscience').addEventListener('click', (event) => {
  //   for (let i = 1; i < 10; i++) {
  //     var target = document.getElementById("Checkbox" + i);
  //     if (target.checked == true) {
  //       confessionList.innerHTML += "<p id='list-item'>" + confessionItem.innerText + "</p>";
  //       console.log("Item has been checked");
  //     }
  //   }

  // })


