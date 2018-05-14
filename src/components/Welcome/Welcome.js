import './Welcome.css';

const Welcome = () => {
  return `
    <div class="Welcome">
      <div class="app-details">
        <h1>
          Quick Display
        </h1>
        <h3>
          A quick and simple single page to display and showcase your GitHub ideas
        </h3>
        <div class="welcome-actions">
          <div class="start">
            <a href="#"> Start Using Quick Display
          </div>
          <div class="github">
            <a href="#"> GitHub </a>
          </div>
        </div>
      </div>
      <div class="app-feature-showcase">
        App Feature Showcase
      </div>
    </div>
  `;
};

export default Welcome;
