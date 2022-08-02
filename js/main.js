import digitalClock from './DigitalClock.js';
digitalClock();

document.querySelectorAll('.block').forEach(el =>{
    el.addEventListener('mouseover',()=>{
        el.style.cursor = 'pointer';
        el.style.background = 'transparent';
    })
    el.addEventListener('mouseout',()=>{
        el.style.background = 'rgb(65, 65, 65)';
    })
})