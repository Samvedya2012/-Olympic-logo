canvas = document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.linewidth = 4;
ctx.rect(20,20,380,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.linewidth = 5;
ctx.arc(100,75,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.linewidth = 5;
ctx.arc(220,75,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.linewidth = 5;
ctx.arc(340,75,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.linewidth = 6;
ctx.arc(160,110,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.linewidth = 6;
ctx.arc(280,110,50,0,2*Math.PI);
ctx.stroke();