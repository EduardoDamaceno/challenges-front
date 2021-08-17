const checkbox = document.querySelector(".on-off__checkbox")
const body = document.querySelector("body")


checkbox.addEventListener('click', function(){
  if(body.classList.contains('white')){
    body.classList.remove('white')
  } else{
     body.classList.add('white')
  }
 
})
