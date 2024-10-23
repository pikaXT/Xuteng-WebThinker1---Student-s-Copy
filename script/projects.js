window.onload = () => {
    const canvas = document.getElementById("canvasBoard");
    let ctx = canvas.getContext("2d");

    // ctx.beginPath()
    // ctx.moveTo(0,0)
    // ctx.lineTo(400,400)
    // ctx.stroke()
    ctx.fillStyle = "rgba(255, 0, 0)"
    ctx.fillRect(0, 250, 100, 100)

}