This simple web app was made to support a streamer friend of mine.

He asked me to make him a chat component based off the typing in rocket league.

Using [tmi.js](https://tmijs.com/) to access the chat.

You can try out a basic version [Here](https://deathalchemy.com)!

To access users rooms use the url parameter users seperated by commas. Ex: [users=shroud,summit1g,notdeathalchemy](https://deathalchemy.com?users=shroud,summit1g,notdeathalchemy)

To change how many messages are on screen use the max parameter max is a number. Ex: [max=15](https://deathalchemy.com?users=shroud,summit1g,notdeathalchemy&max=15)

To dynamically change the config you can use the config parameter config is a key from an array. Ex [config=rl](https://deathalchemy.com?config=rl)

To enable a custom style and logic check out the configs folder, it includes a css and js file. There are two examples included for the rocket league look.
The JS file is setup in a class format to allow for overwriting functions so that they can be customized.
The CSS file is imported directly and can be used to style the site.
