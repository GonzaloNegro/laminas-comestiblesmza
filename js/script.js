const workContainer = document.querySelector('.workContainer');
const burga = document.querySelector('.burga');
const fondoNav = document.querySelector('.fondoNav');
const navLinks = document.querySelectorAll('.navLinks');
let useLinks;

let works = [
    { photo: '../images/torta-1.png', text: 'torta' },
    { photo: '../images/torta-2.png', text: 'torta' },
    { photo: '../images/torta-1.png', text: 'torta' },
    { photo: '../images/torta-2.png', text: 'torta' },
    { photo: '../images/torta-1.png', text: 'torta' },
    { photo: '../images/torta-2.png', text: 'torta' }
];

works.forEach(work => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const span = document.createElement('span');

    img.setAttribute('src', work.photo);
    p.textContent = work.text;

    div.append(p);
    div.append(img);
    div.append(span);
    workContainer.append(div);
})

burga.addEventListener('click', openNav)
fondoNav.addEventListener('click', openNav)
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        if(fondoNav.classList.contains('displayNav')) {
            openNav();
        }
    })
}

function openNav() {
    const burgas = document.querySelectorAll('.burgas');
    const navBar = document.querySelector(".header__nav-ul");
    useLinks = document.querySelectorAll('.useLinks');
    const body = document.querySelector('body');

    burgas[0].classList.toggle('burga0');
    burgas[1].classList.toggle('burga1');
    burgas[2].classList.toggle('burga2');
    navBar.classList.toggle("nav-menu_visible");
    fondoNav.classList.toggle('displayNav');
    body.classList.toggle('no-scroll');
}