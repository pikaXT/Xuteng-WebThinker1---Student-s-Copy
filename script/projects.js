let x, y, dx, dy, canvas, ctx, ballRadius;
window.onload = () => {
    canvas = document.getElementById("canvasBoard");
    ctx = canvas.getContext("2d");

    ballRadius = 5;

    x =canvas.width / 2 - ballRadius / 2;
    y =canvas.height / 2 - ballRadius / 2;
    dx = 10;
    dy = 10;

    draw();

}

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 113, 113)"
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
    ctx.fill();
    ctx.closePath();

    if (x + dx > canvas.width - ballRadius ||  x + dx < ballRadius ) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius ||  y + dy < ballRadius ) {
        dy = -dy;
    }

    x = x + dx;
    y = y + dy;



    requestAnimationFrame(draw);
}