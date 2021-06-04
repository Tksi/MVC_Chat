export const MessageView = class {
  /**
   * messagesからHTMLを生成して返す
   *
   * @param {[]} messages
   * @returns {string} HTML文字列
   */
  createElement(messages) {
    return messages
      .map((message) => {
        // 送信メッセージ
        if (message.to) {
          return `<div class='message message-send'>-> ${message.body}</div>`;
        }

        // 受信メッセージ
        if (message.from) {
          // サーバからのメッセージ
          if (message.from === 'server') {
            // 接続情報のとき
            if (message.option.split(' ')[1] === 'Connected') {
              return `<div class='message message-connect'>${message.option}</div>`;
            }
            // 切断情報のとき
            else {
              return `<div class='message message-disconnect'>${message.option}</div>`;
            }
          }

          // ユーザからのメッセージ
          return `<div class='message message-recieve'><- ${message.body}</div>`;
        }
      })
      .join('\n');
  }
};
