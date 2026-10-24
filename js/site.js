(function () {
	const menuButton = document.querySelector('.menu-toggle');
	const navigation = document.querySelector('.navatalho');

	if (!menuButton || !navigation) {
		return;
	}

	function setMenuOpen(isOpen) {
		menuButton.classList.toggle('active', isOpen);
		navigation.classList.toggle('active', isOpen);
		menuButton.setAttribute('aria-expanded', String(isOpen));
		menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
	}

	menuButton.addEventListener('click', function () {
		setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
	});

	navigation.addEventListener('click', function (event) {
		if (event.target.closest('a')) {
			setMenuOpen(false);
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			setMenuOpen(false);
			menuButton.focus();
		}
	});
})();
