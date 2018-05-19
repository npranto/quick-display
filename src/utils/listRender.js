const listRender = (list, transformCallback) => (
  list
    .map((item, index, _list) => transformCallback(item, index, _list))
    .join('\n')
);

export default listRender;
