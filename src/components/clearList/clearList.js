export const clearList = () => {
  const list = document.querySelector('.leaderboard__list');
  list.innerHTML = '';
  return list;
};
