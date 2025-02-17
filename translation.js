function setLanguage(lang) {
	const newUrl = window.location.pathname + '?lang=' + lang;
	window.history.pushState({ path: newUrl }, '', newUrl);

	document.documentElement.lang = lang;
	document.querySelectorAll('[data-lang-en]').forEach((el) => {
		el.textContent = el.getAttribute(`data-lang-${lang}`);
	});
}

function getLanguageFromURL() {
	const params = new URLSearchParams(window.location.search);
	return params.get('lang') || 'en';
}

setLanguage(getLanguageFromURL());
