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
    if(enemy.x >= 800-10 || enemy.x <= 10)
        enemy.Xdir *= -1
    if(enemy.y >= 450-10 || enemy.y <= 10)
        enemy.Ydir *= -1
}