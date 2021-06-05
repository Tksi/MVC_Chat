import { App } from './src/App.js';

const jsForm = document.querySelector('#js-form');
const jsMessages = document.querySelector('#js-messages');
const wsURL = 'ws://localhost:8080';

const app = new App({
  jsForm,
  jsMessages,
  wsURL,
});
app.mount();
