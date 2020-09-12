class Twitch {
  constructor(users, max, chat) {
    this.chat = chat;
    this.users = (users && users.split(',')) || ['shroud', 'summit1g', 'notdeathalchemy', 'tulogit2quit'];
    this.max = (parseInt(max, 10)) || 10;
    this.msgs = [];
    console.log(this);
  }

  getUsers() {
    return this.users;
  }

  pasreMessage(message) {
    return DOMPurify.sanitize(message.replace(/[\u00A0-\u9999<>\&]/gim,i=>'&#'+i.charCodeAt(0)+';'));
  }

  onMessage() {
    return this.msgs.map((msg)=>`<p class='message'>${msg.username}: ${this.pasreMessage(msg.message)}</p>`).join('');
  }

  logicMessage(username, message) {
    if(this.msgs.length >= this.max) this.msgs.shift();
    console.log(this.msgs.length);
    this.msgs.push({ username, message });
    chat.innerHTML = this.onMessage();
  }
}

export default Twitch;
