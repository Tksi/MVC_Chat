export const MessageModel = class {
  constructor(mesagges = []) {
    this.mesagges = mesagges;
    this._onChange = () => {};
  }

  /**
   * 受け取ったオブジェクトをmessagesに入れて_onChangeを実行
   *
   * @param {{ body: string, option: string, from: string, isBroad: Boolean, to: string }} isSendがtrueの場合は送信用
   */
  addMessage = ({ body, option = '', from = '', isBroad = false, to = '' }) => {
    this.mesagges.push({ body, option, from, isBroad, to });
    this._onChange({ body, option, from, isBroad, to });
  };

  /**
   * addMessagが呼ばれたときに実行される関数を更新する
   *
   * @param {function} func　実行される関数、引数で追加されたmessageを受け取る
   */
  onChange = (func) => {
    this._onChange = func;
  };
};
