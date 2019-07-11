function Func(){

    var canvas = document.getElementById("MyCanvas");
    var ctx = canvas.getContext('2d');

    console.log(ctx);

 /*
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI * 2);
        ctx.fillStyle='blue';
        ctx.fill();
        ctx.stroke();

      //  ctx.beginPath();
      console.log(canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
       // ctx.stroke();
    */

    var pi = Math.PI;
    var val = 100;
    const MAX = 50;
    const POINTSIZE = 1;

    var x = 0;
    var y = 0;
    var radius = MAX;

    for(i = 1; i < MAX; i++){
        val = i/100;
        val = Math.PI * val;
        x = Math.sin(val);
        y = Math.cos(val);
        x = Math.round(x * radius);
        y = Math.round(y * radius);
        console.log("i = ", i, "x = ", x, "y = ", y);
        
        ctx.fillStyle = "#ff2626";
        ctx.beginPath();
        ctx.arc(x, y, POINTSIZE, 0, Math.PI * 2, true);
        ctx.fill();
    }
       
}