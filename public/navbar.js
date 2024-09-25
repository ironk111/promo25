let menu = [
    {text: "Contact", href: "/contact"},
    {text: "About", href: "/about"},
    {text: "FAQs", href: "/faqs"}
];

let html = [];

for (let item of menu) {
    

    html.push(
        `<li class="nav-item">
            <a class="nav-link" href="${item.href}">${item.text}</a>
        </li>`);
}

document.querySelector("header nav div div ul").innerHTML = html.join("");