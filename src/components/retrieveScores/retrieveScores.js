import { path } from '../variables/variables';

const retrieveScores = async () => {
  const retrieve = await fetch(path);
  const data = await retrieve.json();
  console.log(data);
  // data.result.sort((a, b) => b.score - a.score);
};

export default retrieveScores;
