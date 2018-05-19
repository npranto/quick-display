import App from './components/App';
import { render } from './utils';
import {
  toggleNavigationMenu,
  enableNavigationMenuSmoothScroll,
  initializaPlyr,
} from './events';
import './../node_modules/plyr/dist/plyr.css';
import './index.css';

const executeBeforeContentRender = () => (
  new Promise((resolve, reject) => {
    try {
      // actions to execute before rendering any elements to the DOM (start)
      // CODE HERE...
      // actions to execute before rendering any elements to the DOM (end)
      resolve(true);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  })
);

const executeAfterContentRender = () => (
  new Promise((resolve, reject) => {
    try {
      // actions to execute after rendering all elements to the DOM (start)
      initializaPlyr();
      toggleNavigationMenu();
      enableNavigationMenuSmoothScroll();
      // actions to execute after rendering all elements to the DOM (end)
      resolve(true);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  })
);

// START HERE...
executeBeforeContentRender()
  .then(() => render('App', App))
  .catch(errorInExecutionBefore => console.error('ERROR IN EXECUTION BEFORE: \n', errorInExecutionBefore))
  .then(() => executeAfterContentRender())
  .catch(errorInRender => console.error('ERROR IN RENDER: \n', errorInRender))
  .then(() => console.log('READY!'))
  .catch(errorInExecutionAfter => console.error('ERROR IN EXECUTION AFTER: \n', errorInExecutionAfter));
