import { path } from '../variables/variables';

const retrieveScores = async () => {
  const retrieve = await fetch(path);
  const data = await retrieve.json();
  data.result.sort((a, b) => b.score - a.score);
  console.log(data);
};

export default retrieveScores;
