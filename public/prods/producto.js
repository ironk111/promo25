class producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo,
        this.detalle = detalle,
        this.precio = precio,
        this.stock = stock,
        this.imagen = imagen
    }
}

let bmw = new producto("BMW 3 Series GT M Sport", "Powered by the four-cylinder turbo diesel N47, 184 hp. Acceleration to 100 km/h comes in just under 8 seconds. 4.9 to 5.1 liters per 100 kilometers.", "$1.000", 2, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");

let card = `<div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src="${bmw.imagen}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">${bmw.titulo}</h5>
                                <h5 class="card-title">${bmw.precio}</h5>
                                <p class="card-text poppins-light">${bmw.detalle}</p>
                                <h5 class="card-title">Stock: ${bmw.stock}</h5>
                                <a href="#" class="btn btn-primary rounded-pill">Drive Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

document.querySelector("main").innerHTML = card;