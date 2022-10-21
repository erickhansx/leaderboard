import './alertSuccess.scss';

const alertSuccess = () => {
  const successDiv = document.createElement('div');
  successDiv.classList.add('alert-success');
  successDiv.innerText = 'You have successfully added your score to the leaderboad. Click on Refresh';

  document.body.appendChild(successDiv);
  setTimeout(() => {
    successDiv.remove();
  }, 3000);
};

export default alertSuccess;
