const burgerIcons = document.getElementById('burgerIcons');
const iconBars = document.getElementById('iconBars');
const iconXmark = document.getElementById('iconXmark');
const menuList = document.getElementById('menuList');


const langSelect = document.getElementById('langSelect'); 
const langMenuList = document.getElementById('langSelect');


burgerIcons.addEventListener('click', () => {
	menuList.classList.toggle('menu-close')
	iconXmark.classList.toggle('hide')
	iconBars.classList.toggle('hide')
})


langSelect.addEventListener('click', () => {
	langMenuList.classList.toggle('lang-open')
	
})