// Fixed header

const header = document.querySelector('.main-header'),
	hero = document.querySelector('.hero'),
	logo = document.querySelector('.main-logo'),
	headerHeight = header.offsetHeight,
	heroHeight = hero.offsetHeight;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance >= heroHeight) {
		header.classList.add('main-header--fixed');
	} else {
		header.classList.remove('main-header--fixed');
	}
});

// Scroll to start page

logo.addEventListener('click', () => {
	hero.scrollIntoView({
		behavior: 'smooth'
	});
});

// Burger button activate

const burger = document.querySelector('.burger-btn');

burger.addEventListener('click', function(e) {
  e.preventDefault;
  burger.classList.toggle('burger-btn_active');
});