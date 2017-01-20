/**
 * Created by jojo, sigga, usi
 */
//Bua til constructor function fyrir Point med x og y hnt
$(document).ready(function () {
    var settings = {
        canvas: document.getElementById("myCanvas"),
        nextShape: "Pen",
        nextColor: "black",
        eraser: "white",
        isDrawing: false,
        currentShape: undefined,
        shapes: [],
        redoShapes: [],
        nextFont: "Arial",
        nextTextSize: "16px ",
        textY: 0,
        textX: 0
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
        document.getElementById("myCanvas").style.cursor ="url(pen.png), auto";
  	});

  	$("#line").click(function() {
  		settings.nextShape = "Line";
        document.getElementById("myCanvas").style.cursor = "default";
  	});

  	$("#rectangle").click(function() {
  		settings.nextShape = "Rectangle";
        document.getElementById("myCanvas").style.cursor = "crosshair";
  	});

  	$("#circle").click(function() {
  		settings.nextShape = "Circle";
        document.getElementById("myCanvas").style.cursor = "default";
  	});

    $("#text").click(function() {
        settings.nextShape = "Text";
        document.getElementById("myCanvas").style.cursor = "text";
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

        $("#inputText").hide();
        settings.redoShapes = [];
        settings.isDrawing = true;
        var shape = undefined;

        if(settings.nextShape === "Text") {
            $("#inputText").show();
            settings.isDrawing = false;
            settings.textX = x;
            settings.textY = y;
            console.log("hello");
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

        if(shape !== undefined){
            settings.currentShape = shape;
        }

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
                drawAll();
                settings.currentShape.draw(context);
            }
            else if(settings.nextShape === "Rectangle") {
                context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
                settings.currentShape.setEnd(x, y);
                drawAll();
                settings.currentShape.draw(context);
            }
            else if(settings.nextShape === "Line") {
                context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
                settings.currentShape.setEnd(x, y);
                drawAll();
                settings.currentShape.draw(context);
            }
            else if(settings.nextShape === "Eraser") {
                context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
                settings.currentShape.points.push({x: x, y: y});;
                drawAll();
                settings.currentShape.draw(context);
            }
            else{
                context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
                settings.currentShape.points.push({x: x, y: y});
                drawAll();
                settings.currentShape.draw(context);
            }
        }
    });

    $("#myCanvas").mouseup(function (e) {
        settings.isDrawing = false;
        if(settings.currentShape !== undefined)
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
    });

    $("#redo").click(function () {
        var context = settings.canvas.getContext("2d");
        if(settings.redoShapes.length !== 0){
            settings.shapes.push(settings.redoShapes.pop());
            context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
            drawAll();
        }
    });

    $("#inputText").keypress(function(e) {
        var key = e.which;
        var shape = undefined;
        if(key == 13){
            var text = $("#inputText").val();
            console.log(text);
            if(text !== ""){
                shape = new Text(settings.textX, settings.textY, settings.nextColor, text, settings.nextFont, settings.nextTextSize);
                settings.shapes.push(shape);
                drawAll();
                $("#inputText").val("");
            }
        }
    });

});
