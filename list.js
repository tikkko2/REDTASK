

students.forEach(element => {
    let card = `
      <div class="card" style="width: 18rem;">
      <img src="${element.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.age}</p>
        <p class="card-text">${element.data}</p>
        <p class="card-text">${element.course}</p>
        <p class="card-text">${element.attendance}</p>
        <p class="card-text">${element.scholarship}</p>
        <a href="#" class="btn btn-primary">More Details</a>
      </div>
    </div>
    `;
    document.getElementById("laptops").innerHTML += card;
  });