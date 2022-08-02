
// Внизу недороблена ідея, щоб по кнопці мінявся годинниковий час на 24годинниковий !!!

// import digitalClock from "./DigitalClock";

// const btn = document.querySelector('.btn')

// const digitalClockFull = () =>{
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();
//     let am = 'AM';
//     hour.textContent = h;
//     minute.textContent = m;
//     second.textContent = s;
//     ampm.textContent = am;
//     if(h<10){
//         hour.textContent = '0' + h;
//     }
//     if(m<10){
//         minute.textContent = '0' + m
//     }
//     if(s<10){
//         second.textContent = '0' + s
//     }
//     ampm.remove();
//     setTimeout(()=> digitalClockFull(),1000)
//     setTimeout(()=> {btnChange.forEach(el=>{
//         el.classList.toggle('active')
//     })},3000)
// }
// btn.addEventListener('click',()=>{
//     digitalClockFull()
// })
// btnChangeBack.addEventListener('click',()=>{
//     digitalClock()
// })
// export default digitalClockFull;