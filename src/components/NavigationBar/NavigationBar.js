import { getState } from './../../state';
import { listRender } from './../../utils';
import './NavigationBar.css';

const renderTabs = tabs => (
  listRender(tabs, (tab) => {
    const { name, url } = tab;
    return `
      <li class="tab large">
        <a href=${url}> ${name} </a>
      </li>
    `;
  })
);

const renderMenuItems = tabs => (
  listRender(tabs, (tab) => {
    const { name, url } = tab;
    return `
      <div class="menu-item"> 
        <a href=${url} class="menu-link" data-to=${url}> 
          <label for="___toggle-navigation-menu___"> ${name} </label> 
        </a> 
      </div>
    `;
  })
);
const NavigationBar = () => {
  const { location } = window;
  const { navigationBar } = getState();
  const { logo, tabs } = navigationBar;
  return `
    <nav class="NavigationBar">
      <ul class="nav-sections">
        <li class="logo-section">
          <div class="logo-container">
            <a href=${location.origin}>
              <img src=${logo} alt="Logo">
            </a>
          </div>
        </li>
        <li class="tabs-section">
          <ul class="tabs">
            ${renderTabs(tabs)}
            <li class="tab toggler small">
              <a href=""> 
                <label for="___toggle-navigation-menu___">
                  <i class="fas fa-bars fa-2x "></i> 
                  <input type="checkbox" id="___toggle-navigation-menu___" />
                </label>
              </a>
            </li>
          </ul>
        </li>
      <ul>
    </nav>

    <div class="navigation-toggle-menu">
      ${renderMenuItems(tabs)}
    </div>
  `;
};

export default NavigationBar;
