export class grid {
    constructor(w,h) {
        this.grid = new Array()
        this.w = w
        this.h = h
    }
    create() {
        for(let i = 0; i < this.w; ++i) {
            this.grid.push(new Array())
            for(let k = 0; k < this.h; ++k)
                this.grid[i][k] = {x: i *20,y: k *20,set: false}
        }
    }
    draw(ctx,x,y){
        if(!this.grid[x][y].set) {
            this.grid[x][y].set = true
            ctx.drawImage(
                sprite,
                0 * 16,
                2 * 16,
                16,
                16,
                this.grid[x][y].x,
                this.grid[x][y].y,
                20,
                20
            )
        }
    }
    get(x,y) {
        return this.grid[x][y].set
    }    
}