import Particle from "./particle.js";

const particles = [];

for (let i = 0; i < 200; i++) {
    const posX = Math.random() * 10 + 200;
    const posY = Math.random() * 10 + 200;
    
    const speeX = Math.random() * 10-5;
    const speeY = Math.random() * 10-5;
    const size = Math.random() * 10 + 3;
    const newParticle = new Particle(posX, posY, speeX, speeY, size);
    particles.push(newParticle);
}

setInterval(function () {
    moveParticle.update();
    particles.forEach(function(particle) {
        particle.update();
    });
}, 33);

const moveParticle = new Particle(100, 100, 0, 0)

document. addEventListener("keydown", function (event) {
    event.preventDefault();
    const key = event.key;

    const speed = 10;

    console.log("key pressed" + event.key);
    if (key === "w" || key === "ArrowUp") {
        console.log("Go up!");
        moveParticle.accelerate(0, -speed);
    }
    if (key === "s" || key === "ArrowDown") {
        console.log("Go down!");
        moveParticle.accelerate(0, speed);
    }
    if (key === "a" || key === "ArrowLeft") {
        console.log("Go left!");
        moveParticle.accelerate(-speed, 0);
    }
    if (key === "d" || key === "ArrowRight") {
        console.log("Go right!");
        moveParticle.accelerate(speed, 0);
    }
});