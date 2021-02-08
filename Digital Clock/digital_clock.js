let digital_time = document.getElementById('digital_time');
let digital_date = document.getElementById('digital_date');


setInterval(function(){
  let date = new Date();
  digital_time.innerHTML = date.toLocaleTimeString();
}, 1000)
setInterval(function(){
  let date = new Date();
  digital_date.innerHTML = date.toLocaleDateString();
}, 1000)