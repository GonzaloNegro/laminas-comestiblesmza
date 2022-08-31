const workContainerTwo = document.querySelector('.workContainerTwo');
const burga = document.querySelector('.burga');
const fondoNav = document.querySelector('.fondoNav');

let worksPage = [
    { photo: '../images/work1.png', text: 'Lámina de arroz' },
    { photo: '../images/work2.png', text: 'Lámina de arroz' },
    { photo: '../images/work3.png', text: 'Cortantes' },
    { photo: '../images/work4.png', text: 'Cortantes' },
    { photo: '../images/work5.png', text: 'Lámina de arroz' },
    { photo: '../images/work6.png', text: 'Chocotranfers' },
    { photo: '../images/work7.png', text: 'Cortantes' },
    { photo: '../images/work8.png', text: 'Lámina de arroz ' },
    { photo: '../images/work9.png', text: 'Chocotranfers' }
];

worksPage.forEach(work => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const span = document.createElement('span');

    img.setAttribute('src', work.photo);
    p.textContent = work.text;

    div.append(p);
    div.append(img);
    div.append(span);
    workContainerTwo.append(div);
})


burga.addEventListener('click', openNav)
fondoNav.addEventListener('click', openNav)

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