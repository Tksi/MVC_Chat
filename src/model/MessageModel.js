export const MessageModel = class {
  constructor({ ws, messages = [] }) {
    this.mesagges = messages;
    this.ws = ws;
  }

  /**
   * 受け取ったオブジェクトをmessagesに入れる
   *
   * @param {{ body: string, option: string, from: string, isBroad: Boolean, to: string }} isSendがtrueの場合は送信用
   */
  addMessage = ({ body, option, from, isBroad, to }) => {
    this.mesagges.push({ body, option, from, isBroad, to });
    //TODO: toがあればws.sendする
    //TODO: viewからelement取得する
    //TODO: 描画する(render)
  };
};
