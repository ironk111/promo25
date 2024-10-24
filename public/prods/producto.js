/*class producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo,
        this.detalle = detalle,
        this.precio = precio,
        this.stock = stock,
        this.imagen = imagen
    }
}*/

//let bmw = new producto("BMW 3 Series GT M Sport", "Powered by the four-cylinder turbo diesel N47, 184 hp. Acceleration to 100 km/h comes in just under 8 seconds. 4.9 to 5.1 liters per 100 kilometers.", "$1.000", 2, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");

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

// Obtener ID del producto de la URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('prod'), 10);

// Buscar el producto en el array
const producto = data.find(item => item.id === productId);

// Generar el contenido del productos
if (producto) {
    let card = `<div class="row justify-content-center">
                  <div class="col-lg-8 col-md-10">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.nombre}">
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text poppins-light">Cumpleaños: ${producto.cumple}</p>
                                    <p class="card-text poppins-light">Info: </p>
                                    <h5 class="card-title">Redes: </h5>
                                    <a href="#" class="btn btn-primary rounded-pill"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    document.querySelector("main").innerHTML = card;
} else {
    document.querySelector("main").innerHTML = `<p>Integrante no encontrado.</p>`;
}
