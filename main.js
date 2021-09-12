// SpaceGrab Javascript Game.
// by Julio Soto @qodenite
// JS13k 2021

import {eraseCanvas, drawCircle} from './utilities.js'
import {champion, game, enemy, starField} from './entities.js'
import { startControls } from './controls.js';
import { champEdge, enemyEdge, champEnemies, enemySquare } from './collisions.js'
import { grid } from './grid.js';

function setupSprites() {
	return new Promise(function (resolve, reject) {
		sprites.src = "./sprites.png";
        console.log(sprites)
		sprites.onload = function () {
			resolve("loaded the sprites");
		};
	});
}

const SG_game = new game()
let champ = new champion(10,10,2,1,0,0)
let squares = new grid(40,23)
squares.create()
let stars = new starField(200);
stars.create()
stars.draw(SG_game.ctx2)
let enemies = new Array(3)
for(let i = 0; i < 3; ++i) {
    let xs = 0.5 + Math.random() 
    enemies[i] = new enemy(10 + Math.random() * 780,10 + Math.random() * 430,2,xs,2 - xs)
}
let frames = 0
window.onload = function() {
    console.log('onload')
        console.log('page loaded')
        startControls(champ,SG_game,mainLoop)
        SG_game.interval = setInterval(mainLoop,1000/SG_game.FPS)
}
const mainLoop = () => {
    if(++frames == 60){
         //eraseCanvas(SG_game.ctx2,1)
         //squares.draw(SG_game.ctx2,0,22)
         frames=0
    }
    SG_game.ctx.clearRect(0,0,800,460)
    champ.x += (champ.speed * champ.Xdir)
    champ.y += (champ.speed * champ.Ydir)
    enemies.forEach(en => {
        en.x += (en.speed * en.Xdir)
        en.y += (en.speed * en.Ydir)
    })

    champEdge(champ)
    
    if(champEnemies(champ,enemies)) pauseGame(SG_game), champ.onDeath()
    enemies.forEach( en => {
        enemySquare(en,squares)
    })
    enemies.forEach( en => {
        enemyEdge(en)
    })

    //stars.flicker(SG_game.ctx2)
    drawCircle(SG_game.ctx,champ.x,champ.y,10,'#00f')
    champ.draw(SG_game.ctx,sprite)
    squares.draw(SG_game.ctx2, Math.floor(champ.x/20) ,Math.floor(champ.y/20)  )
    enemies.forEach( en => {
        drawCircle(SG_game.ctx,en.x,en.y,10,'#f00')
        SG_game.ctx.drawImage(
            sprite,
            0 * 16,
            1 * 16,
            16,
            16,
            en.x -10,
            en.y -10,
            22,
            22
        )
    })
}



