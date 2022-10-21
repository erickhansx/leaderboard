import { alertFail } from '../alertFail/alertFail';
import { alertSuccess } from '../alertSuccess/alertSuccess';
import { path, name, score } from '../variables/variables';

const clearInput = () => {
  name.value = '';
  score.value = '';
};

export const addScore = async (name, score) => {
  const postScore = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score: score,
    }),
  });
  alertSuccess();
  clearInput();
};
