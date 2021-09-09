
export function eraseCanvas(ctx,opacity) {
    ctx.fillStyle = '#001'//"rgba(0, 0, 25, " + opacity + ")";
    ctx.rect(0, 0, 800, 460)
    ctx.fill()
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
export function drawCircle(ctx,x,y,r,color) {
    ctx.strokeStyle = color
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(x,y,r,0,2*Math.PI)
    ctx.stroke()
  }