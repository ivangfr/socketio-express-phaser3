# socketio-express-phaser3

The goal of this project is to implement a multiplayer game using [`Socket.IO`](https://socket.io/), [`Express`](https://expressjs.com/) and [`Phaser 3`](https://phaser.io/phaser3).

## Prerequisite

- [`Node.js`](https://nodejs.org/en/)
- [`ngrok`](https://ngrok.com/), in case you want to expose the game, running on your local machine, to the internet

## Start game

Open a terminal and go to `socketio-express-phaser3` folder

Execute the command below if you are running it for the first time
```
npm install
```

Then, run the following command to start the game server
```
node server.js
```

## Play game

Open a browser and access `http://localhost:5000`

## Expose game to the internet

```
ngrok http 5000
```
