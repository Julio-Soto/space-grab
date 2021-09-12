export function champEdge(champ) {
    if(champ.x > 790)
        champ.x = 790
    if(champ.x < 10)
        champ.x = 10
    if(champ.y > 450)
        champ.y = 450
    if(champ.y < 10)
        champ.y = 10
}
export function champEnemies(champ,enemies) {
    let collided = false
    let dist = 0
    enemies.forEach(en => {
        dist = Math.sqrt( (en.x - champ.x) * (en.x - champ.x) + (en.y - champ.y) * (en.y - champ.y ))
        if(dist < 20) collided = true
    })
    return collided
}
export function enemyEdge(enemy) {
    if(enemy.x >= 790 || enemy.x <= 10)
        enemy.Xdir *= -1
    if(enemy.y >= 450 || enemy.y <= 10)
        enemy.Ydir *= -1
}
export function enemySquare(enemy,grid) {

    let x2 = Math.floor(enemy.x/20)
    let y2 = Math.floor(enemy.y/20)
        if(grid.get(x2,y2)){
            let x1 = Math.floor((enemy.x - (enemy.speed * enemy.Xdir))/20)
            let y1 = Math.floor((enemy.y - (enemy.speed * enemy.Ydir))/20)
            
            let xd = x1-x2
            let yd = y1-y2

            if(xd == -1 && yd == 1){
                if(!grid.get(x2 - 1,y2)) yd = 0
                else
                    if(!grid.get(x2,y2 + 1)) xd = 0
            }
            if(xd == 1 && yd == 1){
                if(!grid.get(x2 + 1,y2)) yd = 0
                else
                    if(!grid.get(x2,y2 +1))  xd = 0 
            }
            if(xd == -1 && yd == -1){
                if(!grid.get(x2 - 1,y2)) yd = 0
                else    
                    if(!grid.get(x2,y2 - 1)) xd = 0
            }
            if(xd ==1 && yd == -1){
                if(!grid.get(x2 + 1,y2)) yd = 0
                else
                    if(!grid.get(x2,y2 - 1)) xd = 0
            }

            x2 = x1, y2 = y1

            if(xd) enemy.Xdir = Math.abs(enemy.Xdir) * xd
            if(yd) enemy.Ydir = Math.abs(enemy.Ydir) * yd
         }
}