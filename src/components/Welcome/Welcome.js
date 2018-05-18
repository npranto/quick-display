import { getState } from './../../state';
import { listRender } from './../../utils';
import AppFeatureShowcasePicture from './../../assets/images/ash-edmonds-unsplash.jpg';
import './Welcome.css';

const renderActions = actions => (
  listRender(actions, (action) => {
    const { name, url } = action;
    return `
      <a href=${url}> 
        <div class="block ${name.toLowerCase()}">
          ${name} 
        </div>
      </a>
    `;
  })
);

const Welcome = () => {
  const { welcome } = getState();
  const { actions } = welcome;
  return `
    <div class="Welcome" id="Welcome">
      <div class="app-details">
        <h1 class="title">
          Quick Display
        </h1>
        <p class="description">
          A quick and simple single page to display and showcase your GitHub ideas
        </p>
        <div class="welcome-actions">
          ${renderActions(actions)}
        </div>
      </div>
      <div class="app-feature-showcase">
        <img src=${AppFeatureShowcasePicture} alt="Photo by Michał Kubalczyk on Unsplash" />
      </div>
    </div>
  `;
};

export default Welcome;
