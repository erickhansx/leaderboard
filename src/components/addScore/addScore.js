import alertSuccess from '../alertSuccess/alertSuccess.js';
import { path, name, score } from '../variables/variables.js';

const clearInput = () => {
  name.value = '';
  score.value = '';
};

const addScore = async (name, score) => {
  await fetch(path, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  });
  alertSuccess();
  clearInput();
};

export default addScore;
