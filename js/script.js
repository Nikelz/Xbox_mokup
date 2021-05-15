const introSlider = document.querySelector('.intro-slider');
const gameSlider = document.querySelector('.game-section-slider');

if (introSlider) {
	new Swiper('.intro-slider',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',

		clickable: true,
	},

	loop: true,

	loopedSlides: 2,

	autoplay: {
		delay: 5000,

		disableOnInteraction: true,
	},

});

};
if (gameSlider) {
		new Swiper('.game-section-slider',{
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.game-slider-next'
	},

	loop: true,

	freeMode: true,

	breakpoints: {
		320: {
			centeredSlides: true,
			slidesPerGroup: 1,
		},
		700: {
			centeredSlides: false,
		}
	},
});
}


const navButton = document.querySelector('.nav-toggle');
navButton.addEventListener('click', () => {
	let nav = document.querySelector('.nav');

	if ( ! nav.classList.contains('active') ) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}

});