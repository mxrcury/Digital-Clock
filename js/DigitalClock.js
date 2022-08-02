const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const ampm = document.querySelector('.ampm');
const btnChange = document.querySelectorAll('.btn-change')

const digitalClock = () =>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = 'AM';
    hour.textContent = h;
    minute.textContent = m;
    second.textContent = s;
    ampm.textContent = am;
    if(h<10){
        hour.textContent = '0' + h;
    }
    if(m<10){
        minute.textContent = '0' + m
    }
    if(s<10){
        second.textContent = '0' + s
    }
    if(h > 12){
        hour.textContent = '0' + (h - 12);
        ampm.textContent = 'PM';
    }
    setTimeout(()=> digitalClock(),1000)
    setTimeout(()=> {btnChange.forEach(el=>{
        el.classList.toggle('active')
    })},3000)
}
export default digitalClock;