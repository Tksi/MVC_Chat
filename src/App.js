export const App = class {
  constructor({ jsForm, jsFormInput, jsMessages, wsURL }) {
    this.jsForm = jsForm;
    this.jsFormInput = jsFormInput;
    this.jsMessages = jsMessages;
    this.ws = new WebSocket(wsURL);
  }

  //イベントリスナーの登録
  mount() {
    this.jsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(1);
      //TODO: Modelに値を追加する
    });

    this.ws.addEventListener('message', (message) => {
      console.log(message);
      //TODO: Modelに値を追加する
    });
  }
};
