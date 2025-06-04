// Cambiar el título <h1>
document.querySelector("h1").innerText = "Un poco de nosotros...";

// Mostrar un párrafo dentro del <section>
function parrafo() {
  let contenido = `<p class="card-text poppins-light">
  Somos los primeros egresados de la Escuela ProA de Huinca Renancó, orgullosamente la Promo 25. <br><br>A lo largo de estos años fuimos más que compañeros: nos convertimos en amigos, en parte de una historia compartida. Al principio, éramos muchos, pero con el tiempo algunos descubrieron que esta escuela no era lo que buscaban y siguieron otros caminos. Los que quedamos fuimos forjando vínculos más fuertes, creciendo juntos. Vivimos momentos únicos, creamos proyectos, anécdotas, recuerdos que nos van a acompañar siempre. <br><br>Hoy, queremos ser fiel reflejo de lo que significa ser los primeros egresados de una secundaria nueva: compromiso, esfuerzo, y sobre todo, amistad.
</p>`;
  document.querySelector("section").innerHTML = contenido;
}

// Simular carga de contenido con Promise
const promiseCards = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(parrafo());
  }, 2000);
});


