# TwitchChat
## A simple project that allows the user to display or view theirs or others twitch chat.
### Intended to be used in OBS as a browser source.
* Powered by [tmi.js](https://tmijs.com/)
* This project uses three parameters.
  * users - A list of usernames separated by commas. - Ex: users=notdeathalchemy,tulogit2quit,shroud,summit1g
  * max - The max number of messages from users displayed on the screen. Ex: max=25
  * config - Changes the loaded configuration for stylesheet and javascript class. Ex: config=rl

## Adding customization

To start you can start by duplicating the config.default.css or config.default.js files located in the configs folder.
#### config.default.js
```javascript
import Twitch from '../js/twitch.js';

class Config extends Twitch {
  constructor(users, maxMessages) {
    super(users, maxMessages);
  }
}

export default Config;
```
The default config has no functions that overlap with Twitch parent class.
* pasreMessage - do the necessary sanitize on messages that are sent.
* onMessage - formats the message object that is returned to the main page.
* logicMessage - the logic of the messages moving into the message array.
* getUsers - returns the list of usernames that are being used by the app.
#### config.rocketleague.js (Example)
```javascript
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
```

#### config.default.css
```css
.message { color: white; }
body { background-color: black; }
```
the editable content:
```html
<html>
  <body>
    <div id="chat">
      <p class="message"></p>
    </div>
  <body>
</html>
```
* id:chat - main div that messages are appended in.
* class:message - class that all messages are set with.
#### config.rocketleague.css
```css
@font-face { font-family: 'Arial Narrow'; src: url('../woff/ArialNarrow.woff') format('woff'); }
p { font-family: "Arial Narrow", serif; }
.blue { color: blue; }
.orange { color: orange; }
.message { margin-block-start: 0em !important; margin-block-end: 0em !important; }
```

## The future
- [x] Finish project base concept.
- [x] Add multi and dynamic support for configs.
- [ ] Add google login support with firebase.
- [ ] Allow users to create their custom configs.
- [ ] Allow chat moderation.
