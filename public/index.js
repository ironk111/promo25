//h1 productos
document.querySelector("h1").innerText = "Integrantes";
//Array de objetos/productos
let data = [
  {
    id: 1,
    nombre: "Benja",
    cumple: "27 de agosto",
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg",
    category: "Sport",
  },
  {
    id: 2,
    nombre: "Santino",
    cumple: "2 de febrero",
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg",
    category: "Super",
  },
  {
    id: 3,
    nombre: "Tiziano",
    cumple: "6 de septiembre",
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg",
    category: "Sport",
  },
  {
    id: 4,
    nombre: "Julián",
    cumple: "10 de mayo",
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg",
    category: "Super",
  },
  {
    id: 5,
    nombre: "Luciano",
    cumple: "16 de noviembre",
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg",
    category: "Vintage",
  },
  {
    id: 6,
    nombre: "Ramiro",
    cumple: "4 de febrero",
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg",
    category: "Hyper",
  },
  {
    id: 7,
    nombre: "Lucas",
    cumple: "31 de mayo",
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg",
    category: "Vintage",
  },
  {
    id: 8,
    nombre: "Iván",
    cumple: "21 de abril",
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg",
    category: "Hyper",
  },
];

// Mostrar las cards en el section del body
function card(product) {
  let cardsArray = product.map((producto) => `<div class="col">
      <div class="card h-100 card-hover">
        <div class="image-container">
          <img src="${producto.img}" class="img-fluid" alt="${producto.nombre}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text poppins-light">Cumpleaños: ${producto.cumple}</p>
          <a href="prods/producto.html?prod=${producto.id}" class="btn btn-primary rounded-pill">Más...</a>
        </div>
      </div>
    </div>`);

  document.querySelector("section").innerHTML = cardsArray.join("");
}

//Invoco la función y le paso el objeto entero
card(data);

//-----------------------BUSQUEDA------------------------------

//Variables de búsqueda
const input = document.querySelector("#input");
const buttonSearch = document.querySelector("#search");

// Función filtrar los productos
const filterList = () => {
  // Tomar el valor del input, eliminar espacios y transformarlo a minusculas
  const searchValue = input.value.trim().toLowerCase();
  // Ahora si filtrar los productos basados en el valor ingresado
  const filterData = data.filter((producto) => 
    producto.nombre.toLowerCase().includes(searchValue) //Ponemos el nombre del prod en minusculas
  );

  if (filterData.length > 0) {
    card(filterData);
  } else {
    document.querySelector("section").innerHTML = '<p class="text-center">No se encontró nada.</p>';
  }
};

// Evento cuando haces click en el boton de busqueda
buttonSearch.addEventListener("click", filterList);

//-------------------------------------------------------------
//--------------------BOTONES DE CATEGORIA---------------------

// variable que contiene todos los botones de categorias
const categoryButtons = document.querySelectorAll(".category-button");

// filtrar productos por categoría
function filterByCategory(category) {
  const filteredProducts = data.filter((producto) => producto.category === category);
  if (filteredProducts.length > 0) {
    card(filteredProducts);
  } else {
    document.querySelector("section").innerHTML = '<p class="text-center">Todavía no hay dreams en esta categoría.</p>';
  }
}

// Evento para "category-button"
categoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const category = event.target.innerText;
    filterByCategory(category);
    document.querySelector("h1").innerText = category;// reemplazar el h1 por el nombre de la categoria
  });
});

//-----BOTON DE HOME-----eliminado por: está redireccionado con href en index.html
// variable
/*const homeButton = document.querySelector("#homeButton");

// Evento para mostrar todas las cards
homeButton.addEventListener("click", () => {
  document.querySelector("h1").innerText = "Dreams";
  card(data);
});*/
