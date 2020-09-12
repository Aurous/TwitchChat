import Twitch from '../js/twitch.js';

class Config extends Twitch {
  constructor(users, maxMessages) {
    super(users, maxMessages);
  }

  onMessage() {
    return this.msgs.map((msg)=>`<p class='message ${msg.color}'>${msg.username}: ${this.pasreMessage(msg.message)}</p>`).join('');
  }

  logicMessage(username, message) {
    const color = (username.length % 2) ? 'blue' : 'orange';
    if(this.msgs.length >= this.max) this.msgs.shift();
    this.msgs.push({ username, message, color });
    chat.innerHTML = this.onMessage();
  }

}

export default Config;
