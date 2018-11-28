let HanoiGame = require("./game.js")
let HanoiView = require("./hanoiView.js")

console.log("HELLO")
$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  let view = new HanoiView(game, rootEl);
  view.setUpBoard();
});