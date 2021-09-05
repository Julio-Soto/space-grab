// SpaceGrab Javascript Game.
// by Julio Soto @qodenite
// JS13k 2021

import {eraseCanvas, startControls, drawCircle} from './module.js'
import {champion, game} from './entities.js'

const SG_game = new game()
let champ = new champion(10,100,2,1,0)
startControls(champ)

window.onload = function() {
    const interval = setInterval(mainLoop,1000/SG_game.FPS)
    console.log(SG_game.C)
}
const mainLoop = () => {
    eraseCanvas(SG_game.ctx,1)
    champ.x += (champ.speed * champ.Xdir)
    champ.y += (champ.speed * champ.Ydir)
    drawCircle(SG_game.ctx,champ.x,champ.y,10,'#00f')
}



