import AppFeatureShowcasePicture from './../../assets/images/ash-edmonds-unsplash.jpg';
import './Welcome.css';

const Welcome = () => {
  return `
    <div class="Welcome">
      <div class="app-details">
        <h1 class="title">
          Quick Display
        </h1>
        <p class="description">
          A quick and simple single page to display and showcase your GitHub ideas
        </p>
        <div class="welcome-actions">
          <a href="#"> 
            <div class="block start">
              Start 
            </div>
          </a>
          <a href="#">
            <div class="block github">
              GitHub 
            </div>
          </a>
        </div>
      </div>
      <div class="app-feature-showcase">
        <img src=${AppFeatureShowcasePicture} alt="Photo by Michał Kubalczyk on Unsplash" />
      </div>
    </div>
  `;
};

export default Welcome;
