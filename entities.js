export class champion {
    constructor(x,y,s,Xdir,Ydir) {
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
        this.container = document.getElementById('container'),
        this.FPS = 60
    }
}
