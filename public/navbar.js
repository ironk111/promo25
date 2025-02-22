let menu = [
    {text: "Nosotros", href: "#"},
    {text: "Proyectos", href: "#"},
    {text: "Quiz para niños", href: "quiz.html"}
]

let html = [];

//botones nav
for (let item of menu) {
    

    html.push(
        `<li class="nav-item">
            <a class="nav-link ${item.class}" href="${item.href}" id="${item.id}">${item.text}</a>
        </li>`);
}

document.querySelector("header nav div div ul").innerHTML = html.join("");
