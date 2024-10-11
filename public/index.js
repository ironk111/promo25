//Array con sus respectivos objetos/productos
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
    nombre: "Mercedes-Benz",
    modelo: 2022,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg",
  },
  {
    id: 4,
    nombre: "Audi",
    modelo: 2018,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg",
  },
  {
    id: 5,
    nombre: "Ferrari",
    modelo: 1986,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg",
  },
  {
    id: 6,
    nombre: "Lamborghini",
    modelo: 1997,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg",
  },
  {
    id: 7,
    nombre: "Chevrolet",
    modelo: 1993,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg",
  },
  {
    id: 8,
    nombre: "Dodge",
    modelo: 2019,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg",
  },
  {
    id: 9,
    nombre: "Masserati",
    modelo: 2023,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg",
  },
  {
    id: 10,
    nombre: "Suzuki",
    modelo: 1999,
    img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/10.jpg",
  },
];

// Mostrar todas las tarjetas inicialmente en el section del body
function card(product) {
  let cardsArray = product.map((producto) => `<div class="col">
      <div class="card h-100">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text poppins-light">Modelo: ${producto.modelo}</p>
          <a href="prods/producto.html?prod=${producto.id}" class="btn btn-primary rounded-pill">Drive Now</a>
        </div>
      </div>
    </div>`);

document.querySelector("section").innerHTML = cardsArray.join("");
}
//Invoco la función y le paso el objeto entero
card(data);

//Variables de búsqueda
const input = document.querySelector("#input");
const buttonSearch = document.querySelector("#search");

// Función para filtrar los productos
const filterList = () => {
  // Obtener el valor del input, eliminar espacios y transformarlo a minúsculas
  const searchValue = input.value.trim().toLowerCase();
  // Ahora si filtrar los productos basados en el valor ingresado
  const filterData = data.filter((producto) => 
    producto.nombre.toLowerCase().includes(searchValue) //Ponemos el nombre del prod en minusculas
  );

  if (filterData.length > 0) {
    card(filterData);
  } else {
    document.querySelector("section").innerHTML = "<p>No se ha encontrado ningún vehículo.</p>";
  }
};

//Evento al hacer click en el boton de busqueda
buttonSearch.addEventListener("click", filterList);