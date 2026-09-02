/**
 * AI DISHA — Interactive Neural Mesh Canvas
 * Generates an Apple-grade, high-end monochrome particle and neural synapse network
 * with smooth physics, connection lines, and cursor magnetic interaction.
 */

(function () {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  // Configuration tuned to palette: #101010, #dfdfdf, #b3b3b3, #878787, #5b5b5b
  const config = {
    particleCount: window.innerWidth < 768 ? 45 : 85,
    maxDistance: 140,
    particleColor: 'rgba(223, 223, 223, 0.45)',
    lineColor: 'rgba(135, 135, 135, 0.12)',
    accentLineColor: 'rgba(223, 223, 223, 0.35)',
    speed: 0.4,
  };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    initParticles();
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * config.speed;
      this.vy = (Math.random() - 0.5) * config.speed;
      this.size = Math.random() * 2 + 1;
      this.baseSize = this.size;
      this.glow = Math.random() > 0.7;
    }

    update() {
      // Bounce on edges
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactivity (gentle magnetic push/pull)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const dirX = dx / distance;
          const dirY = dy / distance;
          this.x -= dirX * force * 1.5;
          this.y -= dirY * force * 1.5;
          this.size = this.baseSize * 1.5;
        } else {
          this.size = this.baseSize;
        }
      }

      this.x += this.vx;
      this.y += this.vy;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.glow ? 'rgba(255, 255, 255, 0.85)' : config.particleColor;
      ctx.fill();

      if (this.glow) {
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(223, 223, 223, 0.6)';
      } else {
        ctx.shadowBlur = 0;
      }
    }
  }

  function initParticles() {
    particles = [];
    const count = window.innerWidth < 768 ? 40 : 80;
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.maxDistance) {
          const opacity = (1 - dist / config.maxDistance) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);

          // Check if near mouse for brighter connection
          let isNearMouse = false;
          if (mouse.x !== null) {
            const mDist = Math.sqrt(
              Math.pow(mouse.x - particles[i].x, 2) + Math.pow(mouse.y - particles[i].y, 2)
            );
            if (mDist < mouse.radius) isNearMouse = true;
          }

          ctx.strokeStyle = isNearMouse
            ? `rgba(223, 223, 223, ${opacity * 2.5})`
            : `rgba(135, 135, 135, ${opacity})`;
          ctx.lineWidth = isNearMouse ? 1.2 : 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    connectParticles();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  resize();
  animate();
})();
