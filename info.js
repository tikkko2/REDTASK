
///// validate /////

function validateName(e) {
  var inputName = document.getElementById("name").value;
  var valid = /^[ა-ჰ]+$/;
  if (valid.test(inputName)) {
    $(".name-label").removeClass("invalid");
    $(".name").removeClass("invalid-border");
    $(".name").addClass("blue-border");
    $(".error-name").html("<label>მინიმუმ 2 სიმბოლო, ქართული ასოები</label>");
  } else {
    $(".name-label").addClass("invalid");
    $(".name").removeClass("blue-border");
    $(".name").addClass("invalid-border");
    $(".error-name").html(
      "<label class='invalid'>გამოიყენე ქართული ასოები</label>"
    );
  }
}

function validateSurname(e) {
  var inputSurname = document.getElementById("surname").value;
  var valid = /^[ა-ჰ]+$/;
  if (valid.test(inputSurname)) {
    $(".surname-label").removeClass("invalid");
    $(".surname").removeClass("invalid-border");
    $(".surname").addClass("blue-border");
    $(".error-sur").html("<label>მინიმუმ 2 სიმბოლო, ქართული ასოები</label>");
  } else {
    $(".surname-label").addClass("invalid");
    $(".surname").removeClass("blue-border");
    $(".surname").addClass("invalid-border");
    $(".error-sur").html(
      "<label class='invalid'>გამოიყენე ქართული ასოები</label>"
    );
  }
}

function validateNumber(e) {
  var inputText = document.getElementById("phone").value;
  inputText = inputText.replace(/\s+/g, "");
  var phoneno = new RegExp(/^(\+?995)?(79\d{7}|5\d{8})$/);
  if (phoneno.test(inputText)) {
    $(".phone-label").removeClass("invalid");
    $(".phone").removeClass("invalid-border");
    $(".phone-text").removeClass("invalid");
  } else {
    $(".phone-label").addClass("invalid");
    $(".phone").addClass("invalid-border");
    $(".phone-text").addClass("invalid");
  }
}

function validateEmail(e){
  var emailValue = document.getElementById("email").value;
  var emailValid = new RegExp(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
  if (emailValid.test(emailValue)) {
    $(".email-label").removeClass("invalid");
    $(".email").removeClass("invalid-border");
    $(".email-b-label").removeClass("invalid");
  } else {
    $(".email-label").addClass("invalid");
    $(".email").addClass("invalid-border");
    $(".email-b-label").addClass("invalid");
  }
}

// const api_url = 
//       "https://pcfy.redberryinternship.ge/api/teams";
  
// // Defining async function
// async function getapi(url) {
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log(data);
//     if (response) {
//         hideloader();
//     }
//     show(data);
// }
// getapi(api_url);

// function show(data) {
    
// }

const submitNextBtn = document.querySelector(".next-btn");

submitNextBtn.addEventListener('submit', function(){

});


