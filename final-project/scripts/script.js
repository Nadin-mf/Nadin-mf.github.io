const burgerIcons = document.getElementById('burgerIcons');
const iconBars = document.getElementById('iconBars');
const iconXmark = document.getElementById('iconXmark');
const menuList = document.getElementById('menuList');



burgerIcons.addEventListener('click', () => {
	menuList.classList.toggle('menu-close')
	iconXmark.classList.toggle('hide')
	iconBars.classList.toggle('hide')
})

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;  
}


// -----------------
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
  
   breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }
});


// -------------------

const openForm = document.getElementById('form-open');
const closeForm = document.getElementById('closeForm');
const formWindow = document.getElementById('formWindow');

openForm.addEventListener('click', function(e){
  e.preventDefault();
  formWindow.classList.add('active');
})

closeForm.addEventListener('click', () => {
  formWindow.classList.remove('active');
})