import { displayScores, results } from './components/scores/scoresLi.js';
import './components/global/global.scss';
import gameID from './components/createGame/createGame.js';
import retrieveScores from './components/retrieveScores/retrieveScores';

console.log(retrieveScores());

console.log(gameID);

window.addEventListener('DOMContentLoaded', displayScores(results));

// if (process.env.NODE_ENV === 'production') {
//   console.log('Production Mode');
// } else if (process.env.NODE_ENV === 'development') {
//   console.log('Development Mode');
// }
