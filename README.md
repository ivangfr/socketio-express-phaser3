# socketio-express-phaser3

The goal of this project is to implement a multiplayer game using [`Socket.IO`](https://socket.io/), [`ExpressJS`](https://expressjs.com/) and [`Phaser 3`](https://phaser.io/phaser3).

## Proof-of-Concepts & Articles

On [ivangfr.github.io](https://ivangfr.github.io), I have compiled my Proof-of-Concepts (PoCs) and articles. You can easily search for the technology you are interested in by using the filter. Who knows, perhaps I have already implemented a PoC or written an article about what you are looking for.

## Additional Readings

- \[**Medium**\] [**Creating a Multiplayer Game with Socket.IO, Express.js and Phaser 3**](https://medium.com/@ivangfr/creating-a-multiplayer-game-with-socket-io-express-js-and-phaser-3-51e022d49326)

## Prerequisites

- [`Node.js`](https://nodejs.org/en/)
- [`ngrok`](https://ngrok.com/), in case you want to expose the game, running on your local machine, to the internet

## Car images

We are using this beautiful car image!

![car](static/assets/car.png)

Thanks [Freepik](http://www.freepik.com) for designing it!

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
