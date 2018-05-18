import QuickDisplayLogo from './../assets/images/quick-display-logo.png';

let state = {
  navigationBar: {
    logo: QuickDisplayLogo,
    tabs: [
      {
        name: 'Welcome',
        url: '#Welcome',
      },
      {
        name: 'Features',
        url: '#Features',
      },
      {
        name: 'Usage',
        url: '#Usage',
      },
      {
        name: 'Technologies',
        url: '#Technologies',
      },
      {
        name: 'Contributors',
        url: '#Contributors',
      },
    ],
  },
  welcome: {
    actions: [
      {
        name: 'Start',
        url: '#',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/npranto/quick-display',
      },
    ],
  },
  features: {},
  usage: {},
  technologies: {},
  contributors: {},
};

export const getState = () => Object.assign({}, state);

export const setState = (newState) => {
  state = Object.assign({}, newState);
};
