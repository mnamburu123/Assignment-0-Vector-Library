//Manogna Namburu
//mnamburu@ucsc.edu

function main() {
var canvas = document.getElementById('example');
if (!canvas) {
console.log('Failed to retrieve the <canvas> element');
return;
}

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; 
ctx.fillRect(0, 0, canvas.width, canvas.height); 


//let v1 = new Vector3([2.25, 2.25, 0]); 

    //drawVector(ctx, v1, "red"); 

    var drawButton = document.querySelector('.styled');
    drawButton.addEventListener('click', handleDrawEvent);

    var drawButton2 = document.getElementById('second');
    drawButton2.addEventListener('click', handleDrawOperationEvent);

} 


function drawVector(ctx, v, color) { 
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.lineTo(ctx.canvas.width / 2 + v.elements[0] * 20, ctx.canvas.height / 2 - v.elements[1] * 20);
    ctx.stroke();
}


function handleDrawEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var XV = parseFloat(document.getElementById('x').value);
    var YV = parseFloat(document.getElementById('y').value);
    var v1 = new Vector3([XV, YV, 0]); 

    var XV2 = parseFloat(document.getElementById('x2').value);
    var YV2 = parseFloat(document.getElementById('y2').value);
    var v2 = new Vector3([XV2, YV2, 0]); 

    drawVector(ctx, v1, "red");
    drawVector(ctx, v2, "blue");

}
function angleBetween(v1, v2) {
    var dotproduct = Vector3.dot(v1, v2);
    var magnitude1 = v1.magnitude();
    var magnitude2 = v2.magnitude();
  
    var cosi = dotproduct / (magnitude1 * magnitude2);
    var rads = Math.acos(cosi);
    var degree = rads * (180 / Math.PI);
  
    return degree;
  }
  
  function areaTriangle(v1, v2) {
    var crossproduct = Vector3.cross(v1, v2);
    var A1 = crossproduct.magnitude();
    var A2 = A1 / 2;
    return A2;
  }  


function handleDrawOperationEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var XV = parseFloat(document.getElementById('x').value);
    var YV = parseFloat(document.getElementById('y').value);
    var v1 = new Vector3([XV, YV, 0]); 

    var XV2 = parseFloat(document.getElementById('x2').value);
    var YV2 = parseFloat(document.getElementById('y2').value);
    var v2 = new Vector3([XV2, YV2, 0]); 

    drawVector(ctx, v1, "red");
    drawVector(ctx, v2, "blue");

 var Scalar = parseFloat(document.getElementById('Scalar').value);
 var operation = document.getElementById('operations').value;

 var v3, v4;
 if (operation === "Add") {
     v3 = v1.add(v2);
     drawVector(ctx, v3, "green");
 } else if (operation === "Subtract") {
     v3 = v1.sub(v2);
     drawVector(ctx, v3, "green");
 } else if (operation === "Multiply") {
    v3 = v1.mul(Scalar);
    v4 = v2.mul(Scalar);
    drawVector(ctx, v3, "green");
    drawVector(ctx, v4, "green");
 } else if (operation === "Divide") {
    v3 = v1.div(Scalar);
    v4 = v2.div(Scalar);
    drawVector(ctx, v3, "green");
    drawVector(ctx, v4, "green");
 }else if (operation === "Magnitude") {
    console.log("Magnitude of v1:", v1.magnitude());
    console.log("Magnitude of v2:", v2.magnitude());
}else if (operation === "Normalize") {
    v1.normalize();
    v2.normalize();
    drawVector(ctx, v1, "green");
    drawVector(ctx, v2, "green");
}else if (operation === "Angle Between") {
    const angle = angleBetween(v1, v2);
    console.log("Angle: ", angle);
}else if (operation == "Area") {
    const ar = areaTriangle(v1, v2);
    console.log("Area of The triangle: ", ar);
  }
}

