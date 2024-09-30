// windows.alert("We are connected with js")

var ctx = document.getElementById("mycanva")


// console.log(canvas)

var ctx = canvas.getContext("2d")

const grad =
ctx.createLinearGradient(100,100,200,100)
grad.addColorStop(0,"red")
grad.addColorStop(0.7,"blue")

grad.addColorStop(1,"orange")


ctx.font = "50px Arial"
ctx.fillStyle = grad
ctx.filltext("Hello Class",100,100)
ctx.fillStyle("red")



//const radisl = ctx.createLinearGradient(120,120,20,120,120,30)
// radial.addColorStop(0,"yellow")
//radial.addColorStop(0.2,"blue")




grad.addColorStop(0.3,"blue")
grad.addColorStop(0.7,"red")
grad.addColorStop(1,"lightblue")

ctx.fillStyle = grad
ctx.fillRect(0,0,130,130)