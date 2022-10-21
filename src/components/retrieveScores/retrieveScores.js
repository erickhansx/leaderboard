/* eslint-disable */
import { path } from '../variables/variables.js';
import clearList from '../clearList/clearList.js';

const retrieveScores = async () => {
  try {
    const retrieve = await fetch(path);
    const data = await retrieve.json();

    if (data) {
      clearList();
      data.result.forEach((element) => {
        const ul = document.querySelector('.leaderboard__list');
        const li = document.createElement('li');
        li.classList.add('leaderboard__li');
        li.innerHTML = `${element.user}: ${element.score}`;
        ul.appendChild(li);
      });
      return data;
    }
  } catch (err) {
    console.log('error', err);
  }
};

export default retrieveScores;
