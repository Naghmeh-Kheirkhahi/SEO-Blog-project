// hide and show the drop down list of the services part


let serviceTitle = document.getElementById('serviceTitle');

serviceTitle.addEventListener('mouseover' , ()=> {
    
  document.querySelector('.serviceContainer i').className = 'fas fa-angle-up';
})


serviceTitle.addEventListener('mouseout' , ()=> {
    
  document.querySelector('.serviceContainer i').className = 'fas fa-angle-down';
})


