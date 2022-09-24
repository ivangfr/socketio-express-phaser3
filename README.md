# socketio-express-phaser3

The goal of this project is to implement a multiplayer game using [`Socket.IO`](https://socket.io/), [`ExpressJS`](https://expressjs.com/) and [`Phaser 3`](https://phaser.io/phaser3).

## Prerequisites

- [`Node.js`](https://nodejs.org/en/)
- [`ngrok`](https://ngrok.com/), in case you want to expose the game, running on your local machine, to the internet

## Start game

- Open a terminal and navigate to `socketio-express-phaser3` root folder

- Execute the command below if you are running it for the first time
  ```
  npm install
  ```

- Run the following command to start the game server
  ```
  node server.js
  ```

## Play game

- Open a browser and access http://localhost:5000

- The GIF below shows two users playing at the same time

  ![playing-example](images/car-playing-example.gif)

## Expose game to the internet

- While the server is running in one terminal, open another terminal and run the following command
  ```
  ngrok http 5000
  ```

- Share the `Forwarding` url with your friends
  ```
  ...
  Forwarding     http://cf...0a.ngrok.io -> http://localhost:5000
  Forwarding     https://cf...0a.ngrok.io -> http://localhost:5000
  ...
  ```

## How to upgrade dependencies to latest version

- In a terminal, make sure you are in `socketio-express-phaser3` root folder

- Run the following commands
  ```
  npm upgrade
  npm i -g npm-check-updates
  ncu -u
  npm install
  ```
