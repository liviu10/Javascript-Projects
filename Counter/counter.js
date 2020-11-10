(function(){
  const buttons = document.querySelectorAll('.btn')
  let count = 0


  //Add event listeners and functionailty to each button  
  buttons.forEach(function(button){
    button.addEventListener('click', function(){
      if (button.classList.contains('prevBtn')){
        count--
      } else if (button.classList.contains('nextBtn')){
        count++
      } else if (button.classList.contains('resetBtn')) {
        count = 0;
      } else if (button.classList.contains('prev5Btn')) {
        count -= 5;
      } else if (button.classList.contains('next5Btn')) {
        count += 5;
      }

      //Select the counter text
      const counter = document.querySelector('#counter')
      counter.textContent = count

      if (count < 0 ){
        counter.style.color = '#FF0000'
      } else if (count > 0){
        counter.style.color = '#00FF00'
      } else {
        counter.style.color = '#000000'
      }
    })
  })
})()