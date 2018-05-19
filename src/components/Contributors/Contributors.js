import { getState } from './../../state';
import { listRender } from './../../utils';
import './Contributors.css';

const renderContributors = contributors => (
  listRender(contributors, (contributor) => {
    const { name, photo, link } = contributor;
    return `
      <div class="contributor-item" id="Contributors">
        <a href=${link} >
          <img src=${photo} alt=${name} />
        </a>
      </div>
    `;
  })
);

const Contributors = () => {
  const { contributors } = getState();
  const { list } = contributors;
  return `
    <div class="Contributors">
      <h1 class="content-subtitle"> Contributors </h1>
      <div class="contributor-list">
        ${renderContributors(list)}
      </div>
    </div>
  `;
};

export default Contributors;
