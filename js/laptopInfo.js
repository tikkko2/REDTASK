const dropArea = document.querySelector(".upload-photo");
let file;

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  
  console.log(file);
});

let onlyNumReg = new RegExp(/[0-9]/g);

function onlyNumbersCPU1(e) {
  var inputValueCPU1 = document.getElementById("cpu1").value;
  inputValueCPU1 = inputValueCPU1.replace(/\s+/g, "");
  if (onlyNumReg.test(inputValueCPU1)) {
    $(".cpu1-label").removeClass("invalid");
    $(".cpu1").removeClass("invalid-border");
    $(".cpu1-b-label").removeClass("invalid");
  } else {
    $(".cpu1-label").addClass("invalid");
    $(".cpu1").addClass("invalid-border");
    $(".cpu1-b-label").addClass("invalid");
  }
}

function onlyNumbersCPU2(e) {
  var inputValueCPU2 = document.getElementById("cpu2").value;
  inputValueCPU2 = inputValueCPU2.replace(/\s+/g, "");
  if (onlyNumReg.test(inputValueCPU2)) {
    $(".cpu2-label").removeClass("invalid");
    $(".cpu2").removeClass("invalid-border");
    $(".cpu2-b-label").removeClass("invalid");
  } else {
    $(".cpu2-label").addClass("invalid");
    $(".cpu2").addClass("invalid-border");
    $(".cpu2-b-label").addClass("invalid");
  }
}

function onlyNumbersRAM(e) {
  var inputValue = document.getElementById("ram").value;
  inputValue = inputValue.replace(/\s+/g, "");
  if (onlyNumReg.test(inputValue)) {
    $(".ram-label").removeClass("invalid");
    $(".ram").removeClass("invalid-border");
    $(".ram-b-label").removeClass("invalid");
  } else {
    $(".ram-label").addClass("invalid");
    $(".ram").addClass("invalid-border");
    $(".ram-b-label").addClass("invalid");
  }
}

function onlyNumbersPrice(e) {
  var inputValue = document.getElementById("price").value;
  inputValue = inputValue.replace(/\s+/g, "");
  if (onlyNumReg.test(inputValue)) {
    $(".price-label").removeClass("invalid");
    $(".price").removeClass("invalid-border");
    $(".price-b-label").removeClass("invalid");
  } else {
    $(".price-label").addClass("invalid");
    $(".price").addClass("invalid-border");
    $(".price-b-label").addClass("invalid");
  }
}

function validateLaptopName(e){
  var inputValue = document.getElementById("laptop").value;
  inputValue = inputValue.replace(/\s+/g, "");
  var valid = new RegExp(/[a-zA-Z0-9]/g); 
  if (valid.test(inputValue)) {
    $(".laptop-label").removeClass("invalid");
    $(".laptop").removeClass("invalid-border");
    $(".laptop-b-label").removeClass("invalid");
  } else {
    $(".laptop-label").addClass("invalid");
    $(".laptop").addClass("invalid-border");
    $(".laptop-b-label").addClass("invalid");
  }
}

// foreach unda gavyve
let laptops = `
          <div class="row py-3 col-md-4">
            <div class="col-md-6">
              <img src="./photos/laptop.png" alt="" srcset="" width="100%" />
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center">
              <h5>${api}</h5> //apidan unda wamovigo info
              <p>${api}</p> //apidan unda wamovigo info
              <a href="">მეტის ნახვა</a>
            </div>
          </div>
`;
document.getElementById("laptops").innerHTML += laptops;