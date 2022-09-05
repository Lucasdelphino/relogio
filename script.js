const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milesimos = document.getElementById('milesimos');
const data = document.getElementById('data');
const mes = document.getElementById('mes');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let d = dateToday.getDate();
    let m = dateToday.getMonth()+1;
    let a = dateToday.getFullYear();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let mill = dateToday.getMilliseconds();
    
    if (d <10) d = '0' + d

    if (m <10) m = '0' + m

    if (a <10) a = '0' + a

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    if (mill <10) mill = '0' + mill;

 
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    milesimos.textContent = mill;
    data.textContent = d;
    mes.textContent = m
    ano.textContent = a

})