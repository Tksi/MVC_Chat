import { MessageModel } from './model/MessageModel.js';

export const App = class {
  constructor({ jsForm, jsMessages, wsURL }) {
    this.jsForm = jsForm;
    this.jsMessages = jsMessages;
    this.ws = new WebSocket(wsURL);
    this.messageModel = new MessageModel();
  }

  //イベントリスナーの登録
  mount() {
    this.jsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(e.srcElement.input.value);
      //TODO: MessagaModelに値を追加する
      // this.messageModel.addMessage();
      e.srcElement.input.value = '';
    });

    this.ws.addEventListener('message', (message) => {
      console.log(message);
      //TODO: MessageModelに値を追加する
      // this.messageModel.addMessage();
    });
  }
};
