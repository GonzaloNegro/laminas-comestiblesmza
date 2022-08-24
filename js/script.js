const workContainer = document.querySelector('.workContainer');

let works = [
    {photo: '../images/torta-1.png', text: 'torta'},
    {photo: '../images/torta-2.png', text: 'torta'},
    {photo: '../images/torta-1.png', text: 'torta'},
    {photo: '../images/torta-2.png', text: 'torta'},
    {photo: '../images/torta-1.png', text: 'torta'},
    {photo: '../images/torta-2.png', text: 'torta'}
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