const clearList = () => {
  const list = document.querySelector('.leaderboard__list');
  list.innerHTML = '';
  return list;
};

export default clearList;
