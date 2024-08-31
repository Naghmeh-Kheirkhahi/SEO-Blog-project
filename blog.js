

// related to the menu part when it is scrolled

window.onscroll = function() {
    var header = document.getElementById("header");
    if (window.pageYOffset > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};



// related to the search bar in the blog page

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



// hide and show the drop down list of the services part

