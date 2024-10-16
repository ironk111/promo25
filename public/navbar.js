let menu = [
    {text: "About", href: "/about"},
    {text: "FAQs", href: "/faqs"},
    {text: "Sport", href: "#", id: "sport", clase: "category-button"},
    {text: "Super", href: "#", id: "super", clase: "category-button"},
    {text: "Hyper", href: "#", id: "hyper", clase: "category-button"},
]

let html = [];

//botones nav
for (let item of menu) {
    

    html.push(
        `<li class="nav-item">
            <a class="nav-link ${item.clase}" href="${item.href}" id="${item.id}">${item.text}</a>
        </li>`);
}

document.querySelector("header nav div div ul").innerHTML = html.join("");
