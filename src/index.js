import { displayScores } from './components/scores/scoresLi.js';
import './components/global/global.scss';
import { retrieveScores } from './components/retrieveScores/retrieveScores';
import {
  submitBtn,
  name,
  score,
  refreshBtn,
} from './components/variables/variables.js';
import { addScore } from './components/addScore/addScore.js';
import { alertSuccess } from './components/alertSuccess/alertSuccess.js';

document.addEventListener('DOMContentLoaded', retrieveScores());

submitBtn.addEventListener('click', () => {
  console.log(name.value, score.value);
  alertSuccess();
  addScore(name.value, score.value);
});
refreshBtn.addEventListener('click', () => {
  retrieveScores();
});

// if (process.env.NODE_ENV === 'production') {
//   console.log('Production Mode');
// } else if (process.env.NODE_ENV === 'development') {
//   console.log('Development Mode');
// }
