//initiallizing canvas

var canvas = document.getElementById("mycanvas")

//setting canvas for 2d
var ctx = canvas.getContext("2d")

//Create radial gradient

var rad = ctx.createRadialGradient(150,75,15,150,75,100);
rad.addcolorstop(0,"blue");
rad.addcolorstop(1,"red")

//Create linear gradient

var grad = ctx.createLinearGradient(0,0,250,0)
grad.addcolorstop(0,"orange")
grad.addcolorstop(1,"green")

//create circle

