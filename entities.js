export class champion {
    constructor(x,y,s,Xdir,Ydir,angle) {
        this.x = x
        this.y = y
        this.speed = s
        this.Xdir = Xdir
        this.Ydir = Ydir
        this.angle = angle
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
            0 * 16,
            16,
            16,
            -10,
            -10,
            24,
            24
        )
        ctx.rotate(this.angle * Math.PI / -180);
	    ctx.translate(-this.x,-this.y);
    }
}
export class enemy {
    constructor(x,y,s,Xdir,Ydir) {
        this.x = x
        this.y = y
        this.speed = s
        this.Xdir = Xdir
        this.Ydir = Ydir
    }
}
export class starField {
    constructor(num) {
        this.stars = new Array(),
        this.colors = ['#999', '#777', '#444'],
        this.num  = num,
        this.idx = 0
    }
    create() {
        this.stars = new Array()
        let x,y
        for(let i = 0; i < this.num; ++i){
            x = Math.random() * 800
            y = Math.random() * 460
            this.stars.push({x: x,y: y})
        }
    }
    draw(ctx) {
        this.stars.forEach( star => {
            ctx.fillStyle = this.colors[Math.floor(Math.random()*3)]
            ctx.rect(star.x,star.y,1,1)
            ctx.fill()
        })
    }
    flicker(ctx) {
        ctx.fillStyle = this.colors[Math.floor(Math.random()*3)]
        ctx.rect(this.stars[this.idx].x,this.stars[this.idx].y,1,1)
        ctx.fill()
        if(++this.idx == this.num) this.idx = 0
    }
}
export class game {
    constructor() {
        this.ctx = document.getElementById('C').getContext("2d"),
        this.ctx2 = document.getElementById('C2').getContext("2d"),
        this.FPS = 60,
        this.interval = new Number(),
        this.paused = false
    }
}
