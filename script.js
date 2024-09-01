
// when we scroll, the menu changes

window.onscroll = function() {
    var header = document.getElementById("header");
    if (window.pageYOffset > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};


// document.body.addEventListener('mousemove' , test);

// function test(e) {
//     console.log(window.pageYOffset);
// }




// for the button of the register form

let subBtn = document.getElementById('subBtn');

subBtn.addEventListener('click', ()=> {

    let form = document.querySelector('form');
    form.style.display= 'none';

    document.querySelector('.registerForm').innerHTML +=
    `<p class="answerForm">Thank you for contacting us. We will get back to you as soon as possible.</p>`
})




// for the FAQ part

const items = document.querySelectorAll('.accordion button');

console.log(items)

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));





// hide and show the drop down list of the services part


let serviceTitle = document.getElementById('serviceTitle');

serviceTitle.addEventListener('mouseover' , ()=> {
    
  document.querySelector('.serviceContainer i').className = 'fas fa-angle-up';
})


serviceTitle.addEventListener('mouseout' , ()=> {
    
  document.querySelector('.serviceContainer i').className = 'fas fa-angle-down';
})

