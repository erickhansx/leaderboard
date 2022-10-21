import { path } from '../variables/variables';

export const retrieveScores = async () => {
  try {
    const retrieve = await fetch(path);
    const data = await retrieve.json();
    console.log(data);
    data.result.forEach((element) => {
      const ul = document.querySelector('.leaderboard__list');
      const li = document.createElement('li');
      li.classList.add('leaderboard__li');
      li.innerHTML = `${element.user}: ${element.score}`;
      ul.appendChild(li);
    });
    return data;
  } catch (err) {
    console.log('error', err);
  }
};
