(function() {
  const pictures = [
    "img-0",
    "img-1",
    "img-2",
    "img-3",
    "img-4",
    "img-5",
    "img-6"
  ];

  //select both left and right button. Add event listeners
  const buttons = document.querySelectorAll(".btn")
  const imageDIV = document.querySelector(".img-container")
  let counter = 0

  buttons.forEach(function(button){
    button.addEventListener("click", function(e){
      min = pictures.indexOf(pictures[0]);
      max = pictures.indexOf(pictures[pictures.length-1]);
      if (button.classList.contains('btn-left')){
        counter--
        if(counter < 0) {
          counter = pictures.length - 1
        } else if (counter !== 0 ) {
          counter = Math.floor(Math.random() * (max - min + 1)) + min
        }
        imageDIV.style.backgroundImage = `url('images/${pictures[counter]}.jpg')`
      }
      if (button.classList.contains('btn-right')){
        counter++
        if(counter > pictures.length - 1) {
          counter = 0
        } else if (counter !== pictures.length - 1) {
          counter = Math.floor(Math.random() * (max - min + 1)) + min
        }
        imageDIV.style.backgroundImage = `url('images/${pictures[counter]}.jpg')`
      }
    })
  })
})();