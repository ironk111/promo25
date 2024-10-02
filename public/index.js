//--------funcion con for y las cards
/*let array = [];

function createCards(){
  for (let cards = 1; cards < 10; cards++) {
    const card = `<div class="col">
      <div class="card h-100">
        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${cards}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text poppins-light">This content is a little bit longer.</p>
          <a href="prods/producto.html" class="btn btn-primary rounded-pill">Drive Now</a>
        </div>
      </div>
    </div>`
    //meter cards en el array
    array.push(card)
  }
}

createCards();---------*/

let data = [
  {
    id: 1,
    nombre: "BMW",
    modelo: 2017,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg",
  },
  {
    id: 2,
    nombre: "Alfa Romeo",
    modelo: 2018,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg",
  },
  {
    id: 3,
    nombre: "Suzuki",
    modelo: 2000,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg",
  },
  {
    id: 4,
    nombre: "BMW",
    modelo: 2008,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg",
  },
  {
    id: 5,
    nombre: "Kia",
    modelo: 2002,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg",
  },
  {
    id: 6,
    nombre: "Chevrolet",
    modelo: 1997,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg",
  },
  {
    id: 7,
    nombre: "Hyundai",
    modelo: 1993,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg",
  },
  {
    id: 8,
    nombre: "Lamborghini",
    modelo: 1991,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg",
  },
  {
    id: 9,
    nombre: "Volkswagen",
    modelo: 2003,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg",
  },
  {
    id: 10,
    nombre: "Mercedes-Benz",
    modelo: 1999,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/10.jpg",
  },
];

//h1
const productos = "Dreams";
document.querySelector("h1").innerText = productos;

// Crear un array vacío para las tarjetas
let cardsArray = [];

cardsArray = data.map((producto) => `<div class="col">
      <div class="card h-100">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text poppins-light">This content is a little bit longer.</p>
          <a href="prods/producto.html?prod=${producto.id}" class="btn btn-primary rounded-pill">Drive Now</a>
        </div>
      </div>
    </div>`);

document.querySelector("section").innerHTML = cardsArray.join(""); //join : convierte array en string.

// https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${cards}.jpg
// window.location.search.split("=")[1]