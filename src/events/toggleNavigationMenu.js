const { document } = window;

const toggleNavigationMenu = () => {
    const togglerCheckboxInput = document.querySelector('.NavigationBar .toggler input');
    const navigationToggleMenu = document.querySelector('.navigation-toggle-menu');

    if (togglerCheckboxInput && navigationToggleMenu) {
        togglerCheckboxInput.addEventListener('change', () => {
            togglerCheckboxInput.checked
                ? navigationToggleMenu.style.display = "block"
                : navigationToggleMenu.style.display = "none"
        });
    }   
}

export default toggleNavigationMenu;