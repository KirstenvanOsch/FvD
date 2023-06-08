console.log('hallo'); 
var pagina2 = document.querySelector('section:nth-of-type(2)')  
var button = document.querySelector("a"); 

button.addEventListener("click",veranderPagina); {
console.log('klik!'); 
 };  
  

function veranderPagina() { 
    console.log('werkt dit?');
    pagina2.classList.add("pagina2"); 
    
} 
