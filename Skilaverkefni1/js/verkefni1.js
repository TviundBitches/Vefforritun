/**
 * Created by jojo, sigga, usi
 */
//Bua til constructor function fyrir Point med x og y hnt
$(document).ready(function () {
    var settings = {
        canvas: document.getElementById("myCanvas"),
        nextShape: "Pen",
        nextColor: "black",
        nextWidth: 2,
        eraser: "white",
        isDrawing: false,
        currentShape: undefined,
        moveOutline: undefined,
        shapes: [],
        redoShapes: [],
        // -- Text stuff  --
        nextFont: "Arial",
        nextTextSize: "16px",
        textY: 0,
        textX: 0,
        // -- Moving --
        dragging: false,
        dragShape: undefined,
        dragOffx: 0,
        dragOffy: 0,
        dragOffxEnd: 0,
        dragOffyEnd: 0
    };
    //select form
        $('select').material_select();
        $(".sizeSelect").change(function () {
            var str = $(".sizeSelect option:selected").val();
            $("#inputText").css('font-size', str);
            settings.nextTextSize = str;
            console.log(settings.nextTextSize);
        })

        $(".fontSelect").change(function () {
            var str = $(".fontSelect option:selected").val();
            $("#inputText").css('font-family', str);
            settings.nextFont = str;
            console.log(settings.nextFont);
        })

    // --------------------------------------------------------------------------------------------
  	//								                      Change color
  	// --------------------------------------------------------------------------------------------
  	$("#redColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#redColor").addClass("colorActive");
  		settings.nextColor = "red";
  	});

    $("#blueColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#blueColor").addClass("colorActive");
        settings.nextColor = "blue";
    });

    $("#greenColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#greenColor").addClass("colorActive");
        settings.nextColor = "green";
    });

    $("#blackColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#blackColor").addClass("colorActive");
        settings.nextColor = "black";
    });

    $("#pinkColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#pinkColor").addClass("colorActive");
        settings.nextColor = "hotPink";
    });

    $("#whiteColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#whiteColor").addClass("colorActive");
        settings.nextColor = "white";
    });

    $("#yellowColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#yellowColor").addClass("colorActive");
        settings.nextColor = "yellow";
    });

    $("#deepRedColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#deepRedColor").addClass("colorActive");
        settings.nextColor = "FireBrick";
    });

    $("#purpleColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#purpleColor").addClass("colorActive");
        settings.nextColor = "darkviolet";
    });

    $("#limeColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#limeColor").addClass("colorActive");
        settings.nextColor = "lawnGreen";
    });

    $("#turquoiseColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#turquoiseColor").addClass("colorActive");
        settings.nextColor = "DarkTurquoise";
    });

    $("#moccasinColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#moccasinColor").addClass("colorActive");
        settings.nextColor = "Moccasin";
    });

    $("#greyColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#greyColor").addClass("colorActive");
        settings.nextColor = "grey";
    });

    $("#brownColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#brownColor").addClass("colorActive");
        settings.nextColor = "saddlebrown";
    });

    $("#deepPinkColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#deepPinkColor").addClass("colorActive");
        settings.nextColor = "DeepPink";
    });

    $("#orangeColor").click(function() {
        $(".colorBtn").removeClass("colorActive");
        $("#orangeColor").addClass("colorActive");
        settings.nextColor = "darkorange";
    });
  	// --------------------------------------------------------------------------------------------
  	//							                         Change shapes
  	// --------------------------------------------------------------------------------------------
  	$("#pen").click(function() {
        $(".fontChanger").hide();
        $(".button").removeClass("active");
        $("#pen").addClass("active");
        settings.nextShape = "Pen";
        document.getElementById("myCanvas").style.cursor ="url(./logos/pen.png), auto";
  	});

  	$("#line").click(function() {
        $(".fontChanger").hide();
        $(".button").removeClass("active");
        $("#line").addClass("active");
        settings.nextShape = "Line";
        document.getElementById("myCanvas").style.cursor = "default";
  	});

  	$("#rectangle").click(function() {
        $(".fontChanger").hide();
        $(".button").removeClass("active");
        $("#rectangle").addClass("active");
        settings.nextShape = "Rectangle";
        document.getElementById("myCanvas").style.cursor = "crosshair";
  	});

  	$("#circle").click(function() {
        $(".fontChanger").hide();
        $(".button").removeClass("active");
        $("#circle").addClass("active");
        settings.nextShape = "Circle";
        document.getElementById("myCanvas").style.cursor = "default";
  	});

    $("#text").click(function() {
        $(".fontChanger").hide();
        $(".button").removeClass("active");
        $("#text").addClass("active");
        settings.nextShape = "Text";
        document.getElementById("myCanvas").style.cursor = "text";
    });

    $("#eraser").click(function() {
        $(".fontChanger").hide();
        $(".button").removeClass("active");
        $("#eraser").addClass("active");
        settings.nextShape = "Eraser";
        document.getElementById("myCanvas").style.cursor ="url(pen.png), auto";
    });

    $("#move").click(function() {
        $(".fontChanger").hide();
        $(".button").removeClass("active");
        $("#move").addClass("active");
        settings.nextShape = "Move";
    });

    $("#bucket").click(function() {
        $(".fontChanger").hide();
        $(".button").removeClass("active");
        $("#bucket").addClass("active");
        settings.nextShape = "Bucket";
    });

    // --------------------------------------------------------------------------------------------
  	//							                        Change Width
  	// --------------------------------------------------------------------------------------------

    $("#small").click(function() {
        $(".fa-circle").removeClass("sizeActive");
        $("#small").addClass("sizeActive");
        settings.nextWidth = 2;
    });

    $("#medium").click(function() {
        $(".fa-circle").removeClass("sizeActive");
        $("#medium").addClass("sizeActive");
        settings.nextWidth = 6;
    });

    $("#large").click(function() {
        $(".fa-circle").removeClass("sizeActive");
        $("#large").addClass("sizeActive");
        settings.nextWidth = 10;
    });

    $("#xlarge").click(function() {
        $(".fa-circle").removeClass("sizeActive");
        $("#xlarge").addClass("sizeActive");
        settings.nextWidth = 14;
    });


  	// --------------------------------------------------------------------------------------------
  	//							        	        Drawing and do stuff on canvas
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
            console.log(y + " " + x);
            $(".fontChanger").show();
            $("#inputText").css({"top":  e.pageY, "left": e.pageX}).show();
            settings.isDrawing = false;
            settings.textX = x;
            settings.textY = y;
            console.log("hello");
        }
        else if(settings.nextShape === "Circle") {
            shape = new Circle(x, y, settings.nextColor, settings.nextWidth, "Circle");
        }
        else if(settings.nextShape === "Rectangle") {
            shape = new Rectangle(x, y, settings.nextColor, settings.nextWidth, "Rectangle");
        }
        else if(settings.nextShape === "Line") {
            shape = new Line(x, y, settings.nextColor, settings.nextWidth, "Line");
        }
        else if(settings.nextShape === "Eraser") {
            shape = new Eraser(x, y, settings.eraser, "Eraser");
            shape.points.push({x: x, y: y});
            shape.draw(context);
        }
        else if(settings.nextShape === "Pen") {
            shape = new Pen(x, y, settings.nextColor, settings.nextWidth, "Pen");
            shape.points.push({x: x, y: y});
            shape.draw(context);
        }
        else if(settings.nextShape === "Bucket") {
            $("#myCanvas").css('background-color', settings.nextColor);
        }
        else {
            settings.moveOutline = new Rectangle(x, y, "black", 1);
            for (var i = settings.shapes.length - 1; i >= 0; i--) {
                if(settings.shapes[i].contains(x, y)) {
                    settings.dragging = true;
                    shape = settings.shapes[i];
                    console.log("shape x: " + shape.x + "shape y: " + shape.y);
                    settings.dragOffy = y - shape.y;
                    settings.dragOffx = x - shape.x;
                    settings.dragOffyEnd = y - shape.endY;
                    settings.dragOffxEnd = x - shape.endX;
                    settings.dragShape = shape;
                    shape = undefined;
                    return;
                }
            }

            if (settings.dragShape) {
                settings.dragShape = undefined;
                settings.dragging = false;
            }

        }

        if(shape !== undefined) {
            settings.currentShape = shape;
        }
    });


    $("#myCanvas").mousemove(function (e) {
        var context = settings.canvas.getContext("2d");
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        if(settings.isDrawing === true){

            if(settings.nextShape === "Text") {

            }
            else if(settings.nextShape === "Circle" || settings.nextShape === "Rectangle" || settings.nextShape === "Line") {
                context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
                settings.currentShape.setEnd(x, y);
                drawAll();
                settings.currentShape.draw(context);
            }
            else if(settings.nextShape === "Eraser" || settings.nextShape === "Pen") {
                context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
                settings.currentShape.points.push({x: x, y: y});;
                drawAll();
                settings.currentShape.draw(context);
            }
            else {

                if(settings.dragging === true && settings.dragShape) {
                    if(settings.dragShape.className == "Rectangle" || settings.dragShape.className == "Line") {
                        context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
                        settings.dragShape.x = x - settings.dragOffx;
                        settings.dragShape.y = y - settings.dragOffy;
                        settings.dragShape.endX = x - settings.dragOffxEnd;
                        settings.dragShape.endY = y - settings.dragOffyEnd;
                        drawAll();
                    }
                }
                else {
                    context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
                    settings.moveOutline.setEnd(x, y);
                    drawAll();
                    context.setLineDash([5, 15]);
                    settings.moveOutline.draw(context);
                    context.setLineDash([0]);
                }
            }
        }
    });

    $("#myCanvas").mouseup(function (e) {
        var context = settings.canvas.getContext("2d");
        settings.isDrawing = false;
        settings.dragging = false;
        settings.dragShape = undefined;
        if(settings.currentShape !== undefined)
            settings.shapes.push(settings.currentShape);
            settings.currentShape = undefined;
        context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
        drawAll();
    });

    $("#undo").click(function () {
        var context = settings.canvas.getContext("2d");
        settings.redoShapes.push(settings.shapes.pop());
        context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
        drawAll();
    });

    $("#redo").click(function () {
        var context = settings.canvas.getContext("2d");
        if(settings.redoShapes.length !== 0) {
            settings.shapes.push(settings.redoShapes.pop());
            context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
            drawAll();
        }
    });

    /*$("#saveButton").click(function () {
        db.drawings.push(settings.shapes);
    });

    function () {
        var saved = document.getElementById("save"),
            df = document.createDocumentFragment();
        for(var i = 1; i <= db.drawings.length; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.appendChild(document.createTextNode("save #" + i));
            df.appendChild(option);
        }
        saved.appendChild(df);
    });*/

    $("#inputText").keypress(function(e) {
        var key = e.which;
        var shape = undefined;
        if(key == 13){
            var text = $("#inputText").val();
            if(text !== "") {
                console.log(settings.nextTextSize);
                shape = new Text(settings.textX, settings.textY, settings.nextColor, text, settings.nextFont, settings.nextTextSize);
                settings.shapes.push(shape);
                drawAll();
                $("#inputText").hide().val("");
                $(".fontChanger").hide();
                settings.nextFont = "Arial";
                $("#inputText").css('font-family', "Arial");
                $("option:selected").removeAttr("selected");
            }
        }
    });


    // --------------------------------------------------------------------------------------------
    //							        	        Helper functions
    // --------------------------------------------------------------------------------------------
    function drawAll(x,y) {
        var context = settings.canvas.getContext("2d");
        settings.shapes.forEach(function (item) {
            item.draw(context);
        })
    }
});
