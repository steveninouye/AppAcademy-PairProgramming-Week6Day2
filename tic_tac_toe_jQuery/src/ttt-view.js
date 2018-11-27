class View {
  constructor(game, $el) {
    this.game = game; 
    this.el = $el
  }

  bindEvents() {
    this.el.on("click", ".boxes", (e) => {
      let $square = e.target;
      this.makeMove($($square));
    })
  }

  makeMove($square) {
    $square.removeClass();
    this.game.playMove($square.data("pos"))
    $square.text(this.game.currentPlayer)
    $square.addClass('player-mark');

    console.log("this is game over")
    console.log(this.game.isOver())
    if(this.game.isOver()){
      this.gameover()
    }
    // this.congrats(winner) 
  }

  gameover(){
    let winner = this.game.winner() === "x" ? "o" : "x";
    let loser = this.game.winner() === "x" ? "x" : "o";
    if (this.game.winner()){
      this.el.children("div").each((idx, el) => {
        let $el = $(el)
        if ($el.text()=== winner) {
          $el.removeClass();
          $el.addClass("winner")
        } else if ($el.text() === loser) {
          $el.removeClass();
          $el.addClass("loser")
        }
        if(idx === 8){
          setTimeout(()=> alert(`Congratulations! ${winner}! You WON!`, 100))
        }
      })
    } else {
      this.el.children("div").each((idx, el) => {
        let $el = $(el)
        $el.removeClass();
        $el.addClass("loser")
      })
    } 
    this.el.off("click");
  }

  // congrats(winer) {
  //   window.alert(`${winner} has won`)
  // }

  setupBoard() {
    this.el.css('background-color', 'black')
    for (let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        let $box = $("<div>")
        $box.addClass("boxes")
        $box.data('pos', [i,j])
        this.el.append($box)
      }
    }
    this.bindEvents();
  }

 
}

module.exports = View;
