export function champEdge(champ) {
    if(champ.x == 800-10 || champ.x == 10)
        champ.Xdir = 0
    if(champ.y == 450-10 || champ.y == 10)
        champ.Ydir = 0
}

export function enemyEdge(enemy) {
    if(enemy.x >= 800-10 || enemy.x <= 10)
        enemy.Xdir *= -1
    if(enemy.y >= 450-10 || enemy.y <= 10)
        enemy.Ydir *= -1
}