
export function eraseCanvas(ctx,opacity) {
    ctx.beginPath();
    ctx.rect(0, 0, 900, 500);
    ctx.fillStyle = "rgba(0, 0, 25, " + opacity + ")";
    ctx.fill();
    //ctx.stroke();
  }
export function startControls(champ) {
    window.addEventListener('keydown',function(e) {
        if(e.key == 'ArrowRight')
        champ.Xdir = 1, champ.Ydir = 0;
        if(e.key == 'ArrowLeft')
        champ.Xdir = -1, champ.Ydir = 0;
        if(e.key == 'ArrowUp')
        champ.Ydir = -1, champ.Xdir = 0;
        if(e.key == 'ArrowDown')
        champ.Ydir = 1, champ.Xdir = 0;
        if(e.key == ' ')
            if(game.paused == true) unPauseGame();
    },false);
    
}
  export function drawCircle(ctx,x,y,r,color) {
    ctx.fillStyle = color;//1a0d00 
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fill();
  }