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

    // ----------------------------------------------
  	//								Change color
  	// ----------------------------------------------
  	$("#redColor").click(function() {
  		settings.nextShape = "red";
  	});

  	// ----------------------------------------------
  	//								Change shapes
  	// ----------------------------------------------
  	$("#pen").click(function() {
  		settings.nextShape = "Pen";
  	});

  	$("#line").click(function() {
  		settings.nextShape = "Line";
  	});

  	$("#rectangle").click(function() {
  		settings.nextShape = "Rectangle";
  	});

  	$("#circle").click(function() {
  		settings.nextShape = "Circle";
  	});

  	// ----------------------------------------------
  	//								Drawing shapes
  	// ----------------------------------------------
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
            shape = new Circle(x, y, settings.nextColor);
        }
        else if(settings.nextShape === "Rectangle") {
            shape = new Rectangle(x, y, settings.nextColor);
        }
        else if(settings.nextShape === "Line") {
            shape = new Line(x, y, settings.nextColor);
        }
        else{
            shape = new Pen(x, y, settings.nextColor);
            shape.points.push({x: x, y: y});
            shape.draw(context);
        }
        settings.currentShape = shape;


    });


    $("#myCanvas").mousemove(function (e) {
        var context = settings.canvas.getContext("2d");
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        if(settings.isDrawing === true){ //vera med tvo current/nest shape if currentShape !== undefined

          if(settings.nextShape === "Text") {

          }
          else if(settings.nextShape === "Circle") {
              context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
              settings.currentShape.setEnd(x, y);
              settings.currentShape.draw(context);
              drawAll();

          }
          else if(settings.nextShape === "Rectangle") {
              context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
              settings.currentShape.setEnd(x, y);
              settings.currentShape.draw(context);
              drawAll();
          }
          else if(settings.nextShape === "Line") {
              context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
              settings.currentShape.setEnd(x, y);
              settings.currentShape.draw(context);
              drawAll();
          }
          else{
              context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
              settings.currentShape.points.push({x: x, y: y});;
              settings.currentShape.draw(context);
              drawAll();
          }

            //drawAll(x,y ); //eitthvad fall sem teiknar oll objectin a medan verid er ad teikna

            // context.beginPath();
            // context.arc(x, y, 50, 0, 2 * Math.PI, false);
            // context.fillStyle = "#8ED6FF";
            // context.fill();
            // context.lineWidth = 5;
            // context.strokeStyle = "black";
            // context.stroke();

        }
    });

    $("#myCanvas").mouseup(function (e) {
        settings.isDrawing = false;
        settings.shapes.push(settings.currentShape);

    });

    function drawAll(x,y) {
        var context = settings.canvas.getContext("2d");
        settings.shapes.forEach(function (item) {
            item.draw(context);
        })
    }

    $("#undo").click(function () {
        var context = settings.canvas.getContext("2d");
        settings.shapes.pop();
        context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
        drawAll();
    })

});
