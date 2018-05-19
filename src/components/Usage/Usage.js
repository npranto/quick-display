import { getState } from './../../state';
import './Usage.css';

const Usage = () => {
  const { usage } = getState();
  const { poster, video } = usage;
  return `
    <div class="Usage" id="Usage">
      <h1 class="content-subtitle"> How To Use Quick Display </h1> 
      <div class="usage-video">
        <div class="player">
          <video poster=${poster} id="player" playsinline controls>
              <source src=${video} type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  `;
};

export default Usage;
