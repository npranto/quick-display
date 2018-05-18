const listRender = (list, transformCallback) => {
  return list.map((item, index, _list) => {
    return transformCallback(item, index, _list);
  }).join('\n');
};

export default listRender;