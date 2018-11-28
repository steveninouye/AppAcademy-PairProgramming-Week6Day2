class HanoiView {
    constructor(game, rootEl) {
        this.game = game;
        this.rootEl = rootEl;
    }

    bindEventMouseOver(){
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

    changeClass(target,newClass){
        target.removeClass();
        target.addClass(newClass);
    }

    bindEventClick(){

    }

    makeMove($piece){

    }

    setUpBoard (){
        this.rootEl.children("div").each ((idx, el) => {
            let $col = $(el);
            $col.data("colNum", idx);
            let $underline = $("<div>");
            $underline.addClass("underline");
            $col.append($underline);
        })
        this.generatePieces();
        this.bindEventMouseOver();
        this.bindEventMouseLeave();
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