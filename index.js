import { App } from './src/App.js';

const jsForm = document.querySelector('#js-form');
const jsFormInput = document.querySelector('#js-form-input');
const jsMessages = document.querySelector('js-messages');
const wsURL = 'ws://10.1.234.2:8888';
const app = new App({
  jsForm,
  jsFormInput,
  jsMessages,
  wsURL,
});
app.mount();
