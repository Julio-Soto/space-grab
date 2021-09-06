// SpaceGrab Javascript Game.
// by Julio Soto @qodenite
// JS13k 2021

import {eraseCanvas, startControls, drawCircle} from './module.js'
import {champion, game, enemy} from './entities.js'
import { champEdge, enemyEdge } from './collisions.js'

const SG_game = new game()
let champ = new champion(10,100,2,1,0)
let enemies = new Array(3)
for(let i = 0; i < 3; ++i) {
    let xs = 0.5 + Math.random() 
    enemies[i] = new enemy(10 + Math.random() * 780,10 + Math.random() * 430,2,xs,2 - xs)
}
startControls(champ)

window.onload = function() {
    const interval = setInterval(mainLoop,1000/SG_game.FPS)
}
const mainLoop = () => {
    eraseCanvas(SG_game.ctx,1)
    champ.x += (champ.speed * champ.Xdir)
    champ.y += (champ.speed * champ.Ydir)
    enemies.forEach(en => {
        en.x += (en.speed * en.Xdir)
        en.y += (en.speed * en.Ydir)
    })
    champEdge(champ)
    enemies.forEach( en => {
        enemyEdge(en)
    })
    drawCircle(SG_game.ctx,champ.x,champ.y,10,'#00f')
    enemies.forEach( en => {
        drawCircle(SG_game.ctx,en.x,en.y,10,'#f00')
    })
}



