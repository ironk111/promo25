//h1 productos
document.querySelector("h1").innerText = "Integrantes";
//Array de objetos/productos
let data = [
  {
    id: 1,
    nombre: "Benjamín",
    cumple: "27 de agosto",
    img: "img/user-silhouette-file.svg",
    category: "",
  },
  {
    id: 2,
    nombre: "Santino",
    cumple: "2 de febrero",
    img: "img/santino.webp",
    category: "",
  },
  {
    id: 3,
    nombre: "Tiziano",
    cumple: "6 de septiembre",
    img: "img/tiziano.jpeg",
    category: "",
  },
  {
    id: 4,
    nombre: "Julián",
    cumple: "10 de mayo",
    img: "img/julian.jpeg",
    category: "",
  },
  {
    id: 5,
    nombre: "Luciano",
    cumple: "16 de noviembre",
    img: "img/luciano.jpeg",
    category: "",
  },
  {
    id: 6,
    nombre: "Ramiro",
    cumple: "4 de febrero",
    img: "img/user-silhouette-file.svg",
    category: "",
  },
  {
    id: 7,
    nombre: "Lucas",
    cumple: "31 de mayo",
    img: "img/lucas2.jpeg",
    category: "",
  },
  {
    id: 8,
    nombre: "Iván",
    cumple: "21 de abril",
    img: "img/ivan4.jpeg",
    category: "",
  },
];

// Mostrar las cards en el section del body
function card(product) {
  let cardsArray = product.map((producto) => `<div class="col">
      <div class="card h-100">
        <div class="image-container card-hover">
          <img src="${producto.img}" class="img-fluid" alt="${producto.nombre}">
        </div>
        <div class="card-body">
          <h3 class="card-title text-center">${producto.nombre}</h3>
          
          <a href="producto.html?prod=${producto.id}" class="btn btn-primary rounded-pill">Más...</a>
        </div>
      </div>
    </div>`);

  document.querySelector("section").innerHTML = cardsArray.join("");
}

//Invoco la función y le paso el objeto entero
//card(data);

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
    document.querySelector("section").innerHTML = '<p class="text-center">Esa persona no está acá crack!</p>';
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
    document.querySelector("section").innerHTML = '<p class="text-center">Todavía no.</p>';
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

// Loading cards
const promiseCards = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(card(data))
  }, 2000)
})

