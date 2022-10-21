import gameID from '../createGame/createGame.js';

const path = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');
const name = document.getElementById('name');
const score = document.getElementById('score');

export {
  path, submitBtn, refreshBtn, name, score,
};
