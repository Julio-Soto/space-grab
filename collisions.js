export function champEdge(champ) {
    if(champ.x > 790)
        champ.x = 790
    if(champ.x < 10)
        champ.x = 10
    if(champ.y > 440)
        champ.y = 440
    if(champ.y < 10)
        champ.y = 10
}

export function enemyEdge(enemy) {
    if(enemy.x >= 800-10 || enemy.x <= 10)
        enemy.Xdir *= -1
    if(enemy.y >= 450-10 || enemy.y <= 10)
        enemy.Ydir *= -1
}