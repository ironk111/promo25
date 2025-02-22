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
    nombre: "Benjamín Apesechea",
    cumple: "27 de agosto",
    img: "/img/user-silhouette-file.svg",
    ig: "https://www.instagram.com/benjaapesechea__0/",
    descripcion: "",
  },
  {
    id: 2,
    nombre: "Santino Jesús Aguirre",
    cumple: "2 de febrero",
    img: "/img/santino.jpeg",
    ig: "https://www.instagram.com/sanntiiiaguirre/",
    descripcion: "¡Hola! \u{1F60E} soy estudiante de la escuela ProA, durante estos seis años he aprendido y disfrutado de estar con mis compañeros pasando por muchas aventuras en este camino. <br><br>A día de hoy estudio inglés y catalán, intentó ser mejor persona cada día, disfrutando de cada momento a pleno, además intento enfocarme en mis proyectos a futuro, en base a mis sueños y aspiraciones. <br><br>\u{26BD}Fanático de Messi, Barcelona y Boca en las buenas y en las malas.",
  },
  {
    id: 3,
    nombre: "Tiziano Dylan Baez",
    cumple: "6 de septiembre",
    img: "/img/tiziano2.jpeg",
    ig: "https://www.instagram.com/tiziano_ik/",
    descripcion: "Hola che! \u{1F973} soy estudiante de la escuela ProA en Huinca Renancó, donde disfruté y aprendí mucho durante los últimos seis años. Desde chico, la tecnología\u{1F4BB}, la música\u{1F3B5} y el fútbol\u{26BD} han sido mis grandes pasiones. <br><br>Hoy disfruto de componer, tocar instrumentos como la guitarra, programar, y por supuesto reír con amigos. Siempre estoy buscando nuevas formas de combinar la creatividad y la tecnología\u{1F680}.",
  },
  {
    id: 4,
    nombre: "Julián D'anna Forestello",
    cumple: "10 de mayo",
    img: "/img/julian.jpeg",
    ig: "https://www.instagram.com/julidanna7/",
    descripcion: "Hola, soy Julián, estudiante de la Escuela ProA Huinca Renancó. De mi paso por este colegio, puedo destacar los buenos momentos pasados con mis compañeros/amigos tanto dentro como fuera de la institución. </br></br>Disfruto del fútbol, la música, mis amigos y los videojuegos, y soy hincha perro de Belgrano. </br></br>Pirata y cuartetero como dios manda &#129653 &#x2620",
  },
  {
    id: 5,
    nombre: "Luciano Fernández",
    cumple: "16 de noviembre",
    img: "/img/luciano2.jpeg",
    ig: "https://www.instagram.com/luchiii_fz/",
    descripcion: "Holaaa, mi nombre es Luciano y formo parte de la primera promoción de ProA Huinca Renancó. <br><br>En estos años en la escuela aprendí sobre tecnología y programación, siempre pasándola bien con mis amigos, fuera de la escuela lo que más me gusta hacer es andar en moto, juntarme con mis amigos, jugar al futbol y salir al boliche.",
  },
  {
    id: 6,
    nombre: "Ramiro Gómez",
    cumple: "4 de febrero",
    img: "/img/user-silhouette-file.svg",
    ig: "https://www.instagram.com/ramii_111r/",
    descripcion: "",
  },
  {
    id: 7,
    nombre: "Lucas Romero",
    cumple: "31 de mayo",
    img: "/img/lucas.jpeg",
    ig: "https://www.instagram.com/lucasromerq/",
    descripcion: "",
  },
  {
    id: 8,
    nombre: "Iván Hugo Vega",
    cumple: "21 de abril",
    img: "/img/ivan2.jpeg",
    ig: "https://www.instagram.com/ivansuelov/",
    descripcion: 'Soy Iván, algunas personas me conocen como "Lorkilos", o también como "Memi", por las personas mas cercanas a mí. Nací el 21 de abril de 2008, en Río Cuarto, llamado antiguamente "El Imperio". Soy un gran aficionado de los videojuegos, el rock, y el fútbol, pero toda mi pasión radica en mi querido Club Atlético Boca Juniors y en la banda que le da sentido a mi vida; Patricio Rey Y Sus Redonditos De Ricota. Entre las cosas que disfruto hacer se pueden destacar tocar la guitarra, hacer videos y transmisiones en vivo, jugar a la pelota con mis amigos y salir a fiestas con ellos. Siempre busco tener experiencias que me dejen buenos recuerdos de mi juventud, superarme a mí mismo cada que puedo y poder darles algo positivo a las personas que me rodean. Ladren lo que ladren los demás.',
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
                                    <p class="card-text poppins-light">Un poco sobre mí: <br>${producto.descripcion}</p>
                                    <h5 class="card-title">Redes: </h5>
                                    <a href="${producto.ig}" class="btn btn-secondary rounded-pill" target="_blank" rel="noopener noreferrer"><img src="/img/instagram-icon.svg" class="img-fluid" style="width: 32px; height: 32px;"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    document.querySelector("main").innerHTML = card;
} else {
    document.querySelector("main").innerHTML = `<p>Esa persona no está acá crack!</p>`;
}
