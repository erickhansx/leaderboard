import { displayScores, results } from './components/scores/scoresLi.js';
import './components/global/global.scss';
import retrieveScores from './components/retrieveScores/retrieveScores';
import { submitBtn, name, score } from './components/variables/variables.js';
import { addScore } from './components/addScore/addScore.js';

// submitBtn.addEventListener('click', () => {
//   console.log(name.value, score.value);
//   addScore(name.value, score.value);
// });

console.log(retrieveScores());

// window.addEventListener('DOMContentLoaded', displayScores(results));

// if (process.env.NODE_ENV === 'production') {
//   console.log('Production Mode');
// } else if (process.env.NODE_ENV === 'development') {
//   console.log('Development Mode');
// }
