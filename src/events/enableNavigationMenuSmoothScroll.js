const { document, location } = window;

const enableNavigationMenuSmoothScroll = () => {
	const navMenuLinks = document.querySelectorAll('.navigation-toggle-menu .menu-link');
	navMenuLinks.forEach(link => {
		link.addEventListener('click', () => {
			location.replace(location.origin + link.dataset.to);
		})
	})
}

export default enableNavigationMenuSmoothScroll;