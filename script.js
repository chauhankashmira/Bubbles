const canvas = document.getElementById('butterflyCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Butterfly class
class Butterfly {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 50 + 50;
    this.speedX = Math.random() * 3 - 1.5;  //  horizontal speed
    this.speedY = Math.random() * 3 - 1.5;  //  vertical speed
    this.angle = Math.random() * Math.PI * 2;
    this.angularSpeed = (Math.random() - 0.5) * 0.05; // Butterfly rotation speed
  }

  // Draw the butterfly
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    // Draw the butterfly's wings (simplified as circles)
    ctx.beginPath();
    ctx.arc(5, 5, this.size, 5, Math.PI * 5);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.restore();
  }

  // Update the butterfly's position and rotation
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.angle += this.angularSpeed;

    // Keep butterfly within canvas bounds
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  }
}

// Create an array of butterflies
const butterflies = [];
for (let i = 0; i < 10; i++) {
  butterflies.push(new Butterfly());
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

  // Update and draw each butterfly
  butterflies.forEach(butterfly => {
    butterfly.update();
    butterfly.draw();
  });

  requestAnimationFrame(animate);  // Repeat the animation
}

animate();
