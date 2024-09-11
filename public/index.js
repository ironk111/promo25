let productos = "Productos";
document.querySelector("h1").innerText = productos;


let array = [];

for (let cards = 1; cards < 10; cards++) {
    const card = `<div class="col">
      <div class="card h-100">
        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${cards}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">content. This content is a little bit longer.</p>
          <a href="#" class="btn btn-primary rounded-pill">Comprar</a>
        </div>
      </div>
    </div>`
    array.push(card)
}

document.querySelector("section").innerHTML = array.join(""); //join : convierte array en string.

// https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${cards}.jpg