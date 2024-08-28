
window.onscroll = function() {
    var header = document.getElementById("header");
    if (window.pageYOffset > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};




let searchBtn = document.getElementById('searchBtn');
let searchBar = document.getElementById('searchBar');


searchBtn.addEventListener('click', ()=>{
    console.log('The search has done!');
})


searchBar.addEventListener("keypress", function (e){
      if (e.key === "Enter"){
        console.log('The search has done!');
      }
  })