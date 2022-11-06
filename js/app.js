// Fixed header

const header = document.querySelector('.main-header'),
	hero = document.querySelector('.hero'),
	logo = document.querySelector('.logo'),
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

logo.addEventListener('click', () => {
	window.scrollBy({
		top: 0,
		behavior: 'smooth'
	});
});