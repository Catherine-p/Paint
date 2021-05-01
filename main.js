canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
linewidth=2;
mouseEvent="";
var last_position_of_X,last_position_of_Y;
window.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
window.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("color").value;
    linewidth=document.getElementById("width").value;
}
window.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
window.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
 if (mouseEvent=="mousedown") { 
   ctx.beginPath();
   ctx.strokeStyle=color;
   ctx.lineWidth=linewidth;
   ctx.moveTo(last_position_of_X,last_position_of_Y);
   ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
   ctx.stroke();
 }
 last_position_of_X=current_position_of_mouse_x;
 last_position_of_Y=current_position_of_mouse_y;
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
        }