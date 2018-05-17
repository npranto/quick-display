import QuickDisplayPoster from './../../assets/images/ash-edmonds-unsplash.jpg';
import QuickDisplayVideo from './../../assets/videos/quick-display.mp4';

import './Usage.css';

const Usage = () => {
  return `
		<div class="Usage">
			<h1 class="content-subtitle"> How To Use Quick Display </h1> 
			<div class="usage-video">
				<div class="player">
					<video poster=${QuickDisplayPoster} id="player" playsinline controls>
							<source src=${QuickDisplayVideo} type="video/mp4">
					</video>
				</div>
			</div>
		</div>
  `;
};

export default Usage;
