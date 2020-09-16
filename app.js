const addToBuy = document.querySelector(".addtobuy");
const tobuys = document.querySelector(".tobuy");
const search = document.querySelector(".searchToBuy");


window.addEventListener('load', e => {
  registerSW(); 
});



addToBuy.addEventListener("submit", (e) => {
    
 e.preventDefault();
    
 const newLi = document.createElement("li");
 const newToBuy = addToBuy.add.value.trim();
    
 newLi.innerHTML = `<li class="list-group-item d-flex justify-content-between">
      <i class="fas fa-check"></i>
      <span>${newToBuy}</span>
      <i class="far fa-trash-alt"></i>
      </li>`;
    
    if (newToBuy.length){
    tobuys.append(newLi);
    }
  
    
  addToBuy.reset();
  addToBuy.add.focus();
     
   
});


tobuys.addEventListener("click", e => {

  if(e.target.classList.contains("fa-check")) {
      const sibling = e.target.nextElementSibling;
      sibling.classList.toggle("check");
     }
    
    if(e.target.classList.contains("fa-trash-alt")) {
      const parentLi = e.target.parentElement;
     parentLi.remove();
     }
    
});


search.addEventListener("keyup", () => {
    searchTerm = search.value.toLowerCase();
    
    Array.from(tobuys.children)
        .filter(tobuy => {
        return !tobuy.textContent.includes(searchTerm);
    })
        .forEach(tobuy => tobuy.classList.add("filtered"));
    
   
    
    Array.from(tobuys.children)
        .filter(tobuy => {
        return tobuy.textContent.includes(searchTerm);
    })
        .forEach(tobuy => tobuy.classList.remove("filtered"));
    
        
    
})



async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log('SW registration failed');
    }
  }
}
    



    
     



