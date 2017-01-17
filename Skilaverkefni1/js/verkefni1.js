/**
 * Created by jojo on 15.1.2017.
 */
//Bua til constructor function fyrir Point med x og y hnt
$(document).ready(function () {
    var settings = {
        canvas: document.getElementById("myCanvas"),
        nextShape: "Rectangle",
        nextColor: "black",
        isDrawing: false,
        currentShape: undefined,
        shapes: []
    };


    $("#myCanvas").mousedown(function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var context = settings.canvas.getContext("2d");
        //var eitthvad = finna ut hvernig a ad na i lit ur e

        settings.isDrawing = true;

        var shape = undefined;
        if(settings.nextShape === "Text") {
            shape = new Text(x, y);
        }
        else if(settings.nextShape === "Circle") {
            shape = new Circle(x, y);
        }
        else if(settings.nextShape === "Rectangle") {
            shape = new Rectangle(x, y);
        }
        else if(settings.nextShape === "Line") {
            shape = new Line(x, y);
        }
        else{
            shape = new Pen(x, y);
        }
        settings.currentShape = shape;
        settings.shapes.push(shape);

        shape.draw(context);
    });


    $("#myCanvas").mousemove(function (e) {
        var context = settings.canvas.getContext("2d");
        if(settings.isDrawing === true){ //vera med tvo current/nest shape if currentShape !== undefined
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;

            drawAll(x,y ); //eitthvad fall sem teiknar oll objectin a medan verid er ad teikna

            // context.beginPath();
            // context.arc(x, y, 50, 0, 2 * Math.PI, false);
            // context.fillStyle = "#8ED6FF";
            // context.fill();
            // context.lineWidth = 5;
            // context.strokeStyle = "black";
            // context.stroke();

        }

    });

    function drawAll(x,y) {
        var context = settings.canvas.getContext("2d");
        settings.shapes.forEach(function (item) {
            item.draw(context,x,y);
        })
    }

    $("#myCanvas").mouseup(function (e) {
        settings.isDrawing = false;
    });
});
