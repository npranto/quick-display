const { document } = window;

const toggleNavigationMenu = () => {
  const togglerCheckboxInput = document.querySelector('.NavigationBar .toggler input');
  const navigationToggleMenu = document.querySelector('.navigation-toggle-menu');
  if (togglerCheckboxInput && navigationToggleMenu) {
    togglerCheckboxInput.addEventListener('change', () => {
      navigationToggleMenu.style.display = togglerCheckboxInput.checked
        ? 'block'
        : 'none';
    });
  }
};

export default toggleNavigationMenu;
