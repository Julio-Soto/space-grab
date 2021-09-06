export class champion {
    constructor(x,y,s,Xdir,Ydir) {
        this.x = x
        this.y = y
        this.speed = s
        this.Xdir = Xdir
        this.Ydir = Ydir
    }
    onDeath() {
        this.x = 10
        this.y = 10
    }
}
export class enemy {
    constructor(x,y,s,Xdir,Ydir){
        this.x = x
        this.y = y
        this.speed = s
        this.Xdir = Xdir
        this.Ydir = Ydir
    }
}
export class game {
    constructor() {
        this.C = document.getElementById('C'),
        this.ctx = this.C.getContext("2d"),
        this.FPS = 60,
        this.interval = new Number(),
        this.paused = false
    }
}
