const workContainerTwo = document.querySelector('.workContainerTwo');

let worksPage = [
    { photo: '../images/work1.png', text: 'torta' },
    { photo: '../images/work2.png', text: 'torta' },
    { photo: '../images/work3.png', text: 'Molde' },
    { photo: '../images/work4.png', text: 'Molde' },
    { photo: '../images/work5.png', text: 'torta' },
    { photo: '../images/work6.png', text: 'torta' },
    { photo: '../images/work7.png', text: 'torta' },
    { photo: '../images/work8.png', text: 'torta' },
    { photo: '../images/work9.png', text: 'torta' }
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
