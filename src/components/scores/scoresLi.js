import './scoresLi.scss';

const results = [
  // {
  //   user: 'John',
  //   score: 100,
  // },
  // {
  //   user: 'Mike',
  //   score: 100,
  // },
  // {
  //   user: 'Luigi',
  //   score: 100,
  // },
  // {
  //   user: 'Robert',
  //   score: 100,
  // },
  // {
  //   user: 'Marlon',
  //   score: 100,
  // },
  // {
  //   user: 'Ann Q',
  //   score: 100,
  // },
  // {
  //   user: 'John',
  //   score: 100,
  // },
];

const displayScores = (results) => {
  if (results != null) {
    results.forEach((result) => {
      const ul = document.querySelector('.leaderboard__list');
      const li = document.createElement('li');
      li.classList.add('leaderboard__li');
      li.innerHTML = `${result.user}: ${result.score}`;
      ul.appendChild(li);
    });
  }
};

export { displayScores, results };
