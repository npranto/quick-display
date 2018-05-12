const { document } = window;

const render = (parentId, Component, props) => {
  try {
    if (typeof Component !== 'function') {
      throw new Error('Component must be a function!');
    }
    const container = document.getElementById(parentId);
    if (!container) {
      throw new Error('Parent id does not exist in the DOM!');
    }
    container.innerHTML = Component(props);
  } catch (e) {
    console.error(e);
  }
};

export default render;
