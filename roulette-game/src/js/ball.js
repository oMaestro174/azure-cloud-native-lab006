class Ball {
    constructor(roulette) {
        this.roulette = roulette;
        this.canvas = roulette.canvas;
        this.ctx = roulette.ctx;
        this.radius = 10;
        this.angle = 0;
        this.speed = 0;
        this.distance = roulette.radius * 0.8;
        this.friction = 0.995;
        this.isSpinning = false;
    }

    draw() {
        const x = this.distance * Math.cos(this.angle);
        const y = this.distance * Math.sin(this.angle);

        this.ctx.save();
        this.ctx.translate(this.roulette.center.x, this.roulette.center.y);
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.strokeStyle = '#333';
        this.ctx.stroke();
        this.ctx.restore();

        if (this.isSpinning) {
            this.angle += this.speed;
            this.speed *= this.friction;
            if (this.speed < 0.001) {
                this.isSpinning = false;
            }
        }
    }

    spin() {
        this.speed = -0.2 - Math.random() * 0.1;
        this.isSpinning = true;
    }
}