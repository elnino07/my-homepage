var select = function (s) {
	return document.querySelector(s);
};

function randomBetween(min, max) {
	var number = Math.floor(Math.random() * (max - min + 1) + min);
	return number !== 0 ? number : 0.5;
}

var tl = gsap.timeline();

for (var i = 0; i < 20; i++) {
	var t = gsap.to(select('.bubble' + i), {
		duration: randomBetween(1, 1.5),
		x: randomBetween(12, 15) * randomBetween(-1, 1),
		y: randomBetween(12, 15) * randomBetween(-1, 1),
		repeat: -1,
		repeatDelay: randomBetween(0.2, 0.5),
		yoyo: true,
		ease: 'elastic.out(1, 0.5)',
	});

	tl.add(t, (i + 1) / 0.6);
}

tl.seek(50);
