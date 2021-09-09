import { pauseGame, unPauseGame } from "./utilities";

export function startControls(champ,game,loop) {
    window.addEventListener('keydown',function(e) {
        if(e.key == 'ArrowRight')
        champ.Xdir = 1, champ.Ydir = 0, champ.angle = 0;
        if(e.key == 'ArrowLeft')
        champ.Xdir = -1, champ.Ydir = 0, champ.angle = 180;
        if(e.key == 'ArrowUp')
        champ.Ydir = -1, champ.Xdir = 0, champ.angle = -90;
        if(e.key == 'ArrowDown')
        champ.Ydir = 1, champ.Xdir = 0, champ.angle = 90;
        if(e.key == ' ')
            game.paused? unPauseGame(game,loop) : pauseGame(game)
    },false);
}