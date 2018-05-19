import QuickDisplayLogo from './../assets/images/quick-display-logo.png';
import Angular from './../assets/images/angular-icon.png';
import Css3 from './../assets/images/css3-icon.png';
import Html5 from './../assets/images/html5-icon.png';
import Javascript from './../assets/images/javascript-icon.png';
import MySql from './../assets/images/mysql-icon.png';
import NodeJs from './../assets/images/nodejs-icon.png';
import Python from './../assets/images/python-icon.png';
import React from './../assets/images/react-icon.png';
import Ruby from './../assets/images/ruby-icon.png';
import Sass from './../assets/images/sass-icon.png';
import QuickDisplayPoster from './../assets/images/ash-edmonds-unsplash.jpg';
import QuickDisplayVideo from './../assets/videos/quick-display.mp4';


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
  features: {
    list: [
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
    ],
  },
  usage: {
    poster: QuickDisplayPoster,
    video: QuickDisplayVideo,
  },
  technologies: {
    list: [
      {
        name: 'Angular',
        photo: Angular,
      },
      {
        name: 'CSS3',
        photo: Css3,
      },
      {
        name: 'HTML5',
        photo: Html5,
      },
      {
        name: 'JavaScript',
        photo: Javascript,
      },
      {
        name: 'MySQL',
        photo: MySql,
      },
      {
        name: 'Node.js',
        photo: NodeJs,
      },
      {
        name: 'Python',
        photo: Python,
      },
      {
        name: 'React',
        photo: React,
      },
      {
        name: 'Ruby',
        photo: Ruby,
      },
      {
        name: 'Sass',
        photo: Sass,
      },
    ],
  },
  contributors: {
    list: [
      {
        name: 'Nazmuz Shakib Pranto',
        photo: 'https://avatars2.githubusercontent.com/u/13524077?v=4',
        link: 'https://github.com/npranto',
      },
    ],
  },
};

export const getState = () => Object.assign({}, state);

export const setState = (newState) => {
  state = Object.assign({}, newState);
};
