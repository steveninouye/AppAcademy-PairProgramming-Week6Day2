class HanoiView {
    constructor(game, rootEl) {
        this.game = game;
        this.rootEl = rootEl;
        this.clicks = [];
    }

    bindListeners(){
        this.bindEventMouseEnter()
        this.bindEventMouseLeave()
        this.bindEventMouseClick();
    }

    bindEventMouseEnter(){
        this.rootEl.on("mouseenter", ".column", (e) => {
            let column = $(e.currentTarget);
            let $underline = column.children(".underline");
            this.changeClass($underline, "active-underline")
        })
    }
    bindEventMouseLeave(){
        this.rootEl.on("mouseleave", ".column", (e) => {
            console.log("mouse leaving")
            let column = $(e.currentTarget);
            let $underline = column.children(".active-underline");
            this.changeClass($underline, "underline")
        })
    }
    
    bindEventMouseClick(){
        this.rootEl.on("click", ".column", (e) => {
            let column = $(e.currentTarget);
            let columnNum = column.data("colNum")
            this.clicks.push(columnNum)
            if (this.game.isValidMove(...this.clicks)){
                this.makeMove()
            } else {
                this.clicks = [];
                // change colors back to normal
            }
        })
    }
    
    changeClass(target,newClass){
        target.removeClass();
        target.addClass(newClass);
    }

    makeMove(){
        this.game.move(...this.clicks)
        this.clicks = [];
    }

    setUpBoard (){
        this.rootEl.children("div").each ((idx, el) => {
            let $col = $(el);
            $col.data("colNum", idx+1);
            let $underline = $("<div>");
            $underline.addClass("underline");
            $col.append($underline);
        })
        this.generatePieces();
        this.bindListeners();
        
    }

    generatePieces(){
        let col1 = $(".col-1")
        for(let i = 3; i >=1 ; i--){
            let $piece = $("<div>")
            $piece.addClass(`level-${i}`)
            col1.append($piece)
        }    
    }
    
}

module.exports = HanoiView;