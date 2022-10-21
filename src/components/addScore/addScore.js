import { path } from '../variables/variables';

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
};
