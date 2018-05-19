const { document } = window;

const render = (parentId, Component, props) => (
  new Promise((resolve, reject) => {
    try {
      if (typeof Component !== 'function') {
        throw new Error('component must be a function!');
      }
      const container = document.getElementById(parentId);
      if (!container) {
        throw new Error('parent id does not exist in the DOM!');
      }
      container.innerHTML = Component(props);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  })
);

export default render;
