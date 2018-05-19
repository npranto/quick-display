import { getState } from './../../state'; 
import { listRender } from './../../utils';
import './Technologies.css';

const renderTechnologies = technologies => (
  listRender(technologies, (technology) => {
    const { name, photo } = technology;
    return `
      <div class="technology-item">
        <img src=${photo} alt=${name} />
      </div>
    `;
  })
);


const Technologies = () => {
  const { technologies } = getState();
  const { list } = technologies;
  return `
    <div class="Technologies" id="Technologies">
      <h1 class="content-subtitle"> Technologies </h1>
      <div class="technology-list">
        ${renderTechnologies(list)}
      </div>
    </div>
  `;
};

export default Technologies;