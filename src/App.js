export const App = class {
  constructor({ jsForm, jsFormInput, jsMessages, wsURL }) {
    this.jsForm = jsForm;
    this.jsFormInput = jsFormInput;
    this.jsMessages = jsMessages;
    this.ws = new WebSocket(wsURL);
  }

  mount() {}
};
