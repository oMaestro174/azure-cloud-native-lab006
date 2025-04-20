class Roulette {
    constructor() {
        this.canvas = document.getElementById('rouletteCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
        this.radius = Math.min(this.canvas.width, this.canvas.height) * 0.4;
        this.rotation = 0;
        this.numbers = Array.from({length: 37}, (_, i) => i);
        this.rotationSpeed = 0;
        this.friction = 0.995; // Reduzimos a fricção para girar mais tempo
        this.isSpinning = false;
        
        this.init();
    }

    init() {
        this.draw();
        this.canvas.addEventListener('click', () => this.spin());
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.translate(this.center.x, this.center.y);
        this.ctx.rotate(this.rotation);

        // Desenhar segmentos da roleta
        const segment = (2 * Math.PI) / 37;
        this.numbers.forEach((num, i) => {
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.arc(0, 0, this.radius, i * segment, (i + 1) * segment);
            this.ctx.fillStyle = this.getNumberColor(num);
            this.ctx.fill();
            this.ctx.stroke();

            // Adicionar números
            this.ctx.save();
            this.ctx.rotate(i * segment + segment / 2);
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillStyle = 'white';
            this.ctx.font = '20px Arial';
            this.ctx.fillText(num.toString(), this.radius * 0.75, 0);
            this.ctx.restore();
        });

        this.ctx.restore();

        if (this.isSpinning) {
            this.rotation += this.rotationSpeed;
            this.rotationSpeed *= this.friction;
            if (this.rotationSpeed < 0.001) {
                this.isSpinning = false;
            }
        }

        requestAnimationFrame(() => this.draw());
    }

    spin() {
        this.rotationSpeed = 0.3 + Math.random() * 0.2;
        this.isSpinning = true;
    }

    getNumberColor(num) {
        if (num === 0) return '#008000';
        return [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36].includes(num) ? '#FF0000' : '#000000';
    }
}