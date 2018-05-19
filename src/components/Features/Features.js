import Feature from './../Feature/Feature';
import { getState } from './../../state';
import { listRender } from './../../utils';
import './Features.css';

const renderFeatures = features => (
  listRender(features, (feature, index) => {
    const { description, photo } = feature;
    return `
      ${Feature({ key: index + 1, description, photo })}
    `;
  })
);

const Features = () => {
  const { features } = getState();
  const { list } = features;
  return `
    <div class="Features" id="Features">
      <h1 class="content-subtitle"> Features </h1>
      ${renderFeatures(list)}
    </div>
  `;
};

export default Features;
