import { isOdd } from './../../utils';
import './Feature.css';

const Feature = ({ key, description, photo }) => `
  <div class="Feature">
    <div class="feature-photo">
      <img src=${photo} alt="Feature Photo" />
    </div>
    <div class="feature-description ${isOdd(key) ? 'stick-left' : ''}">
      <p class="description">
        ${description}
      </p>
    </div>
    
  </div>
`;

export default Feature;
