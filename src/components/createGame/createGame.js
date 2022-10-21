const createGame = async () => {
  const retrieveID = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: 'EricksGame',
      }),
    },
  )
    .then((data) => data.json())
    .then((data) => data.result.split(' ')[3]);
  return retrieveID;
};

createGame();

const gameID = '6kcCyWJECOYybO2bUZrq';

export default gameID;
