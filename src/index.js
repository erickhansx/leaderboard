import './components/scss/styles.scss';
import './components/global/global.scss';
import retrieveScores from './components/retrieveScores/retrieveScores.js';
import {
  submitBtn,
  name,
  score,
  refreshBtn,
} from './components/variables/variables.js';
import addScore from './components/addScore/addScore.js';
import alertFail from './components/alertFail/alertFail.js';

document.addEventListener('DOMContentLoaded', retrieveScores());

submitBtn.addEventListener('click', () => {
  if (name.value === '' || score.value === '') {
    console.log(name.value);
    alertFail();
    return;
  }
  console.log(name.value, score.value);
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
