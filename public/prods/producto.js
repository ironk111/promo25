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
      nombre: "BMW",
      modelo: 2006,
      img: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg",
    },
    {
      id: 2,
      nombre: "Alfa Romeo",
      modelo: 2003,
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

// Obtener el ID del producto de la URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('prod'), 10);

// Buscar el producto en el array
const producto = data.find(item => item.id === productId);

// Generar el contenido del producto
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
                                    <p class="card-text poppins-light">Detalles del producto</p>
                                    <h5 class="card-title">Modelo: ${producto.modelo}</h5>
                                    <a href="#" class="btn btn-primary rounded-pill">Drive Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    document.querySelector("main").innerHTML = card;
} else {
    document.querySelector("main").innerHTML = `<p>Producto no encontrado.</p>`;
}
