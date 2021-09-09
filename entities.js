export class champion {
    constructor(x,y,s,Xdir,Ydir) {
        this.x = x
        this.y = y
        this.speed = s
        this.Xdir = Xdir
        this.Ydir = Ydir
        this.angle = 0
    }
    onDeath() {
        this.x = 10
        this.y = 10
    }
    draw(ctx,img) {
        ctx.translate(this.x, this.y);
	    ctx.rotate(this.angle * Math.PI / 180);
        ctx.drawImage(
            img,
            0 ,
            0 * 8,
            8,
            8,
            -10,
            -10,
            20,
            20
        )
        ctx.rotate(this.angle * Math.PI / -180);
	    ctx.translate(-this.x,-this.y);
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
