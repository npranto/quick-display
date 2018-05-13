import QuickDisplayLogo from './../../assets/images/quick-display-logo.png';
import './NavigationBar.css';

const NavigationBar = () => `
  <nav class="NavigationBar">
    <ul class="nav-sections">
      <li class="logo-section">
        <div class="logo-container">
          <img src=${QuickDisplayLogo} alt="Logo">
        </div>
      </li>
      <li class="tabs-section">
        <ul class="tabs">
          <li class="tab large">
            <a href="#"> Welcome </a>
          </li>
          <li class="tab large">
            <a href="#"> Features </a>
          </li>
          <li class="tab large">
            <a href="#"> Usage </a>
          </li>
          <li class="tab large">
            <a href="#"> Technologies </a>
          </li>
          <li class="tab large">
            <a href="#"> Contributors </a>
          </li>
          <li class="tab toggler small">
            <a href="#"> 
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
    <div class="menu-item"> 
      <a href=""> 
        <label for="___toggle-navigation-menu___"> Welcome </label> 
      </a> 
    </div>
    <div class="menu-item"> 
      <a href=""> 
        <label for="___toggle-navigation-menu___"> Features </label>
      </a> 
    </div>
    <div class="menu-item"> 
      <a href=""> 
        <label for="___toggle-navigation-menu___"> Usage </label>
      </a> 
    </div>
    <div class="menu-item"> 
      <a href=""> 
        <label for="___toggle-navigation-menu___"> Technologies </label>
      </a> 
    </div>
    <div class="menu-item"> 
      <a href=""> 
        <label for="___toggle-navigation-menu___"> Contributors </label>
      </a> 
    </div>
  </div>
`;

export default NavigationBar;
