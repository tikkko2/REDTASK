$(document).ready(function () {
  $(".btn-add").click(function () {
    window.location.href = "./info.html";
    return false;
  });

  $(".btn-list").click(function () {
    window.location.href = "./laptopList.html";
    return false;
  });

  $(".back-btn").click(function () {
    window.location.href = "./index.html";
    return false;
  });

  $(".next-container").click(function () {
    $(".laptop").addClass("underline");
    $(".employee").removeClass("underline");
  });
});

///////// save values: ////
document.getElementById("name").value = getSavedValue("name");
document.getElementById("surname").value = getSavedValue("surname");
document.getElementById("email").value = getSavedValue("email");
document.getElementById("phone").value = getSavedValue("phone");

function saveValue(e) {
  var id = e.id;
  var val = e.value;
  localStorage.setItem(id, val);
}

function getSavedValue(v) {
  if (!localStorage.getItem(v)) {
    return "";
  }
  return localStorage.getItem(v);
}


function validateOnlyNum(e) {
  var inputValue = document.getElementById("phone").value;
  var onlyNumber = new RegExp(/[0-9]/g);
  if (onlyNumber.test(inputValue)) {
  }
}

//////////////////// get data from API ////////////

const api_url = "https://pcfy.redberryinternship.ge/api/teams/";
async function getTeams(){
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
}
getTeams();


// var apiStations = "https://pcfy.redberryinternship.ge/api/teams/";

// function req1() {
//   fetch(apiStations, {
//       method: "get"
//     })
//     .then(response => response.json())
//     .then(data => {
//       let allstations = data.;
//       let html = '';
//       for (var i = 0; i < allstations.length; i++) {
//         html += "<option >" + allstations[i].name + "</option>"
//       }
//       document.getElementById("teams").innerHTML = html;
//     })
// }
// req1();