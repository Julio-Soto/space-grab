
export function eraseCanvas(ctx,opacity) {
    ctx.beginPath();
    ctx.rect(0, 0, 900, 500);
    ctx.fillStyle = "rgba(0, 0, 25, " + opacity + ")";
    ctx.fill();
  }
export function pauseGame(game) {
    game.paused = true
    clearInterval(game.interval)
    console.log('Paused')
}
export function unPauseGame(game,loop) {
    game.paused = false
    game.interval  = setInterval(loop,1000/game.FPS)
    console.log('unpaused')
}
export function startControls(champ,game,loop) {
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
            if(game.paused == true) unPauseGame(game,loop)
    },false);
    
}
  export function drawCircle(ctx,x,y,r,color) {
    ctx.fillStyle = color
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(x,y,r,0,2*Math.PI)
    ctx.fill()
  }