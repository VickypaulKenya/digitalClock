const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');


setInterval(() => {
let today = new Date();
    
hrs.innerHTML = (today.getHours()<10?"0":"")+today.getHours();
min.innerHTML = (today.getMinutes()<10?"0":"")+today.getMinutes();
sec.innerHTML = (today.getSeconds()<10?"0":"")+today.getSeconds();
    console.log(today);
}, 1000);