let menu = [
    {text: "Nosotros", href: "#"},
    {text: "Proyectos", href: "#"},
    {text: "Quiz", href: "quiz.html"}
]
    /*{text: "Sport", href: "#", id: "sport", class: "category-button"},
    {text: "Super", href: "#", id: "super", class: "category-button"},
    {text: "Hyper", href: "#", id: "hyper", class: "category-button"},*/

let html = [];

//botones nav
for (let item of menu) {
    

    html.push(
        `<li class="nav-item">
            <a class="nav-link ${item.class}" href="${item.href}" id="${item.id}">${item.text}</a>
        </li>`);
}

document.querySelector("header nav div div ul").innerHTML = html.join("");
