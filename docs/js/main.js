let btn1 = document.getElementById('li-c');
let btn2 = document.getElementById('li-l');
let btn3 = document.getElementById('li-e');
let btn4 = document.getElementById('li-co');
/* let btn5 = document.getElementById('li-s'); */

btn1.addEventListener('click', (e) => {
    e.preventDefault();
    let dis1 = document.querySelector('.section__article--C');
    let mo1 = dis1.style.display
    
    if(mo1 === ''){
        dis1.style.display = 'block'
    }else{
        dis1.style.display = ''
    }
})
btn2.addEventListener('click', (e) => {
    e.preventDefault();
    let dis2 = document.querySelector('.section__article--L');
    let mo2 = dis2.style.display
    
    if(mo2 === ''){
        dis2.style.display = 'block';
        window.location.href = 'https://cgmontea98.github.io/bit06exercises/'
    }else{
        dis2.style.display = ''
    }
})
btn3.addEventListener('click', (e) => {
    e.preventDefault();
    let dis3 = document.querySelector('.section__article--E');
    let mo3 = dis3.style.display
    
    if(mo3 === ''){
        dis3.style.display = 'block'
    }else{
        dis3.style.display = ''
    }
})
btn4.addEventListener('click', (e) => {
    e.preventDefault();
    let dis4 = document.querySelector('.contacto');
    let mo4 = dis4.style.display
    
    if(mo4 === ''){
        dis4.style.display = 'block'
    }else{
        dis4.style.display = ''
    }
})
/* btn5.addEventListener('click', (e) => {
    e.preventDefault();
    let dis5 = document.querySelector('.section__article--C');
    let mo5 = dis5.style.display
    
    if(mo5 === ''){
        dis5.style.display = 'block'
    }else{
        dis5.style.display = ''
    }
}) */