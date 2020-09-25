/*const particle = {
    elem: document.createElement("div"),
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
}

function upadateParticle(particle) {
    // update stuff
    particle.positionX += particle.speedX;
    particle.positionY += particle.speedY;
    // update...
}*/

export default class Particle {
    constructor(positionX, positionY, speedX, speedY, size) {
        console.log("particle created");

        this.positionX = positionX;
        this.positionY = positionY;
        this.speedX = speedX;
        this.speedY = speedY;
        
        this.elem = document.createElement("div");
        this.elem.classList.add("particle");
        this.elem.style.position = "absolute";
        this.elem.style.height = size + "px";
        this.elem.style.width = size + "px";
        this.elem.style.top = this.positionY +"px";
        this.elem.style.left= this.positionX +"px";

        document.body.appendChild(this.elem);
    }

    accelerate(x, y) {
        this.speedX += x;
        this.speedY += y;
    }
    update() {
        this.positionX += this.speedX;
        this.positionY += this.speedY;

        this.elem.style.top = this.positionY +"px";
        this.elem.style.left= this.positionX +"px";

        const friction = 0.95;

        this.speedX *= friction;
        this.speedY *= friction;
    }
}