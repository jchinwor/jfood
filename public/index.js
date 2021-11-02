const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu")
const close = document.querySelector("#close")

burger.addEventListener('click', () =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        burger.classList.add('hidden')
        close.classList.remove('hidden')
    } 
    else{
        menu.classList.add('hidden')
        
    }
})
close.addEventListener('click', ()=>{
   
        menu.classList.add('hidden')
        burger.classList.remove('hidden')
        close.classList.add('hidden')
  
} )