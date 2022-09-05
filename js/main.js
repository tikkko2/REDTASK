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

// const activePage = window.location.pathname;
// const navEmployee = document.querySelectorAll('employee a');
// const navLaptop = document.querySelectorAll('laptop a');

//////////////// ვალიდაცია ინფუთის /////////////////

// function validateEmail(e) {
//   var inputEmail = document.getElementById("surname").value;
//   var valid = /^[a-zA-Z]+$/;
//   if (valid.test(inputEmail) && inputEmail.endsWith("@redberry.ge")) {
//     $(".email-label").addClass("invalid");
//     // $(".email").removeClass("blue-border");
//     $(".email").addClass("invalid-border");
//     $(".error-email").html(
//       "<label class='invalid'>გამოიყენე ქართული ასოები</label>"
//     );
//     // $(".email-label").removeClass("invalid");
//     // $(".email").removeClass("invalid-border");
//     // $(".email").addClass("blue-border");
//     // $(".error-email").html("<label>მინიმუმ 2 სიმბოლო, ქართული ასოები</label>");
//   } else {
//     // $(".email-label").addClass("invalid");
//     // $(".email").removeClass("blue-border");
//     // $(".email").addClass("invalid-border");
//     // $(".error-email").html(
//     //   "<label class='invalid'>გამოიყენე ქართული ასოები</label>"
//     // );
//     $(".email-label").removeClass("invalid");
//     $(".email").removeClass("invalid-border");
//     $(".email").addClass("blue-border");
//     $(".error-email").html("<label>მინიმუმ 2 სიმბოლო, ქართული ასოები</label>");
//   }
// }

function validateOnlyNum(e) {
  var inputValue = document.getElementById("phone").value;
  var onlyNumber = new RegExp(/[0-9]/g);
  if (onlyNumber.test(inputValue)) {
  }
}

//////////////////// get data from API ////////////

// const address = fetch("https://pcfy.redberryinternship.ge/api/teams/")
//   .then((response) => response.json())
//   .then((user) => {
//     return user.address;
//   });


// printAddress();

// let result = {};
// let allTeam = {};

// async function getTeams() {
//   try {
//     let res = await fetch("https://pcfy.redberryinternship.ge/api/teams/");
//     return await res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function chooseTeam() {
//   allTeam = await getTeams();
//   result = Object.assign({}, allTeam);
//   let select = document.getElementById("team-drop");
//   for (let i = 0; i < result.data.length; i++) {
//     let option = document.createElement("a");
//     option.value = result.data[i]._id;
//     option.text = result.data[i].name;
//     select.appendChild(option);
//   }
// }

// chooseTeam();
// const selectEl = document.querySelector("select");

// async function getJSON(){
//  try{
//   const res = await fetch('')
//   return await res.json();
//  }catch(err){
//   throw new Error();
//  }
// }

// async function generateMarkUp(){
//  const selectOptionsData = await getJSON()
//  const optionsMarkUp = selectOptionsData.map(opt=> `<option value=${opt.value}> ${opt.name} </option>`).join('')
//  selectEl.innerHTML = ''
//  selectEl.insertAdjacentHTML("afterbegin", optionsMarkUp)
// }




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