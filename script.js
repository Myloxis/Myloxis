const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let snowflakes = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function createSnowflakes() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 4 + 1;
    const speedY = Math.random() * 1 + 0.5;
    snowflakes.push({ x, y, radius, speedY });
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    snowflakes.forEach((snowflake) => {
        ctx.moveTo(snowflake.x, snowflake.y);
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    });
    ctx.fill();
    updateSnowflakes();
}

function updateSnowflakes() {
    snowflakes.forEach((snowflake, index) => {
        snowflake.y += snowflake.speedY;
        if (snowflake.y > canvas.height) {
            snowflakes[index] = { x: Math.random() * canvas.width, y: 0, radius: snowflake.radius, speedY: snowflake.speedY };
        }
    });
}

function animate() {
    drawSnowflakes();
    requestAnimationFrame(animate);
}

setInterval(createSnowflakes, 100);
animate();
