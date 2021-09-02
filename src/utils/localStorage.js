const setLocalStorage = (key, value) => {
  const item = {
    value
  };
  localStorage.setItem(key, JSON.stringify(item));
};

const getLocalStorage = key => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);

  return item.value;
};

export { setLocalStorage, getLocalStorage };
