import Feature from './../Feature/Feature';
import './Features.css';

const renderFeatures = (features) => {
  return features.map((feature, index) => {
    const { description, photo } = feature;
    return `
      ${Feature({ key: index + 1, description, photo })}
    `;
  }).join('\n');
};

const Features = () => {
  const features = [
    {
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a color.',
      photo: 'https://images.unsplash.com/photo-1502201563651-826cbb30c3dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0cf47ff5403937c28bd4f856bf7d66e&auto=format&fit=crop&w=800&q=80',
    },
    {
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a color.',
      photo: 'https://images.unsplash.com/photo-1509576931792-214960705f8a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c3b1b3b6dc3f261de3a723417251e23&auto=format&fit=crop&w=966&q=80',
    },
    {
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a color.',
      photo: 'https://images.unsplash.com/photo-1494366222322-387658a1a976?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24100980ab1a60783e1c847b7965bd11&auto=format&fit=crop&w=1051&q=80',
    },
    {
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a color.',
      photo: 'https://images.unsplash.com/photo-1516235328748-f58ef03d0aad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=332d1ced1c5cb80105268fb90988dcb7&auto=format&fit=crop&w=634&q=80',
    },
  ];
  return `
    <div class="Features">
      ${renderFeatures(features)}
    </div>
  `;
};

export default Features;
