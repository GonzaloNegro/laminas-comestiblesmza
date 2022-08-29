const workContainer = document.querySelector('.workContainer');
const burga = document.querySelector('.burga');
const fondoNav = document.querySelector('.fondoNav');
const navLinks = document.querySelectorAll('.navLinks');
let useLinks;

// TRABAJOS
let works = [
    { photo: './images/work1.png', text: 'torta' },
    { photo: './images/work2.png', text: 'torta' },
    { photo: './images/work3.png', text: 'Molde' },
    { photo: './images/work4.png', text: 'Molde' },
    { photo: './images/work5.png', text: 'torta' },
    { photo: './images/work6.png', text: 'torta' }
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


// NAVBAR
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