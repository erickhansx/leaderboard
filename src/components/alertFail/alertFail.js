import './alertFail.scss';

const alertFail = () => {
  const failDiv = document.createElement('div');
  failDiv.classList.add('fail-div');
  failDiv.innerText = 'Please enter a valid name/score.';
  document.body.appendChild(failDiv);

  setTimeout(() => {
    failDiv.remove();
  }, 3000);
};

export default alertFail;