// import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
// import Heading from './components/heading/heading.js';

// const heading = new Heading();
// heading.render();

// const helloWorldButton = new HelloWorldButton();
// helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}
