import { isOdd } from './../../utils';
import './Feature.css';

const Feature = ({ key, description, photo }) => {
	return `
    <div class="Feature">
      <div class="feature-description">
        <p class="description">
          ${description}
        </p>
      </div>
      <div class="feature-photo ${isOdd(key) ? 'stick-left' : ''}">
        <img src=${photo} alt="Feature Photo" />
      </div>
    </div>
	`;
};

export default Feature;
