const canvas = document.getElementById("test-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
let w = canvas.width;
let h = canvas.height;

ctx.beginPath();
ctx.fillRect(120, 150, 150, 150);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(160, 260, 8, 0, Math.PI * 2);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(150, 270, 35, Math.PI * 1.5, 0);
ctx.strokeStyle = "green";
ctx.lineWidth = 10;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 270, 55, Math.PI * 1.5, 0);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 270, 75, Math.PI * 1.5, 0);
ctx.stroke();
ctx.closePath();
