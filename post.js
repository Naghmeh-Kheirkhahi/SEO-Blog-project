// hide and show the drop down list of the services part


let service = document.querySelector('.serviceContainer');

service.addEventListener('mouseover' , ()=> {
    
  document.querySelector('.serviceContainer i').className = 'fas fa-angle-up';
})


service.addEventListener('mouseout' , ()=> {
    
  document.querySelector('.serviceContainer i').className = 'fas fa-angle-down';
})