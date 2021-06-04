export const MessageModel = class {
  constructor(ws) {
    this.mesagges = [];
    this.ws = ws;
  }

  /**
   * 受け取ったオブジェクトをmessagesに入れる
   *
   * @param {{ body: string, option: string, from: string, isBroad: Boolean, to: string }} isSendがtrueの場合は送信用
   */
  addMessage = ({ body, option, from, isBroad, to }) => {
    this.mesagges.push({ body, option: '', from: '', isBroad: '', to: '' });
    //toがあればws.sendする
    if (to) {
      this.ws.send(JSON.stringify({ body, to, option }));
    }
    //TODO: viewからelement取得する -> Serverからのやつはわけたり
    //TODO: 描画する(render)
  };
};
