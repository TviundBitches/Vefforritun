/**
 * Created by jojo on 15.1.2017.
 */
//Bua til constructor function fyrir Point med x og y hnt
$(document).ready(function () {
    var settings = {
        canvas: document.getElementById("myCanvas"),
        nextShape: "Rectangle",
        nextColor: "black",
        eraser: "white",
        isDrawing: false,
        currentShape: undefined,
        shapes: [],
        redoShapes: []
    };

    // --------------------------------------------------------------------------------------------
  	//								         Change color
  	// --------------------------------------------------------------------------------------------
  	$("#redColor").click(function() {
  		settings.nextColor = "red";
  	});

    $("#blueColor").click(function() {
        settings.nextColor = "blue";
    });

    $("#greenColor").click(function() {
        settings.nextColor = "green";
    });

    $("#blackColor").click(function() {
        settings.nextColor = "black";
    });

  	// --------------------------------------------------------------------------------------------
  	//							            Change shapes
  	// --------------------------------------------------------------------------------------------
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

    $("#eraser").click(function() {
  		settings.nextShape = "Eraser";
  	});

  	// --------------------------------------------------------------------------------------------
  	//							        	Drawing shapes
  	// --------------------------------------------------------------------------------------------
    $("#myCanvas").mousedown(function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var context = settings.canvas.getContext("2d");

        settings.isDrawing = true;
        console.log(settings.nextColor);
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
        //Eraser ætti að vera í lagi þegar pen kemur í lag (hægt að nota sama fall og pen þá)
        else if(settings.nextShape === "Eraser") {
            shape = new Eraser(x, y, settings.eraser);
            shape.points.push({x: x, y: y});
            shape.draw(context);
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
          else if(settings.nextShape === "Eraser") {
              context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
              settings.currentShape.points.push({x: x, y: y});;
              settings.currentShape.draw(context);
              drawAll();
          }
          else{
              context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
              settings.currentShape.points.push({x: x, y: y});;
              settings.currentShape.draw(context);
              drawAll();
          }

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
        settings.redoShapes.push(settings.shapes.pop());
        context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
        drawAll();
    })

    $("#redo").click(function () {
        var context = settings.canvas.getContext("2d");
        settings.shapes.push(settings.redoShapes.pop());
        context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
        drawAll();
    });

});
