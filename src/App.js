import { MessageModel } from './model/MessageModel.js';
import { MessageView } from './view/MessageView.js';
export const App = class {
  constructor({ jsForm, jsMessages, wsURL }) {
    this.jsForm = jsForm;
    this.jsMessages = jsMessages;
    this.ws = new WebSocket(wsURL);
    this.messageModel = new MessageModel();
    this.messageView = new MessageView();
  }

  mount() {
    // messagaModelが更新されたときの挙動を定義
    this.messageModel.onChange((message) => {
      console.log(message);
      // toがあればws.sendする
      if (message.to) {
        this.ws.send(JSON.stringify(message));
      }

      // viewからelement取得する
      const messagesElement = this.messageView.createElement(
        this.messageModel.mesagges
      );

      // 描画する
      this.jsMessages.innerHTML = messagesElement;
      this.jsMessages.scroll(0, this.jsMessages.scrollHeight);
    });

    // ユーザがメッセージを入力したとき
    this.jsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(e.srcElement.input.value);
      // messagaModelに値を追加する
      this.messageModel.addMessage({
        body: e.srcElement.input.value,
        to: '*',
      });
      e.srcElement.input.value = '';
    });

    // WebSocketでメッセージを受け取ったとき
    this.ws.addEventListener('message', (message) => {
      const data = JSON.parse(message.data);
      // messagaModelに値を追加する;
      this.messageModel.addMessage(data);
    });
  }
};
