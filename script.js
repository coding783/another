
const animatedImage = document.querySelectorAll('.img-area');
const maxSpread = 200;
const maxRotate = 35;

function updateStack() {
	const scrollPosition = window.scrollY;
	const windowHeight = window.innerHeight;
	const containerTop = document.querySelector('.wrapper').getBoundingClientRect().top;
	const scrollPercentage = Math.min(Math.max(scrollPosition / (windowHeight * 0.5), 0), 1);
	animatedImage.forEach((item, index) => {
		const spread = scrollPercentage * maxSpread;
		const rotate = scrollPercentage * maxRotate;
		const translateY = spread * (index - (animatedImage.length - 1) / 2);
		const translateZ = -spread * index;
		const rotation = rotate * (index % 2 === 0 ? 1 : -1);
		item.style.transform = `
                    translateY(${translateY}px)
                    translateZ(${translateZ}px)
                    rotate(${rotation}deg)
                `;
		item.style.opacity = 1 - (scrollPercentage * 0.2 * index);
	});
}
animatedImage.forEach((item, index) => {
	item.style.zIndex = animatedImage.length - index;
	item.style.transform = 'translateY(0px) translateZ(0px) rotate(0deg)';
});
updateStack();
window.addEventListener('scroll', updateStack);
window.addEventListener('resize', updateStack);