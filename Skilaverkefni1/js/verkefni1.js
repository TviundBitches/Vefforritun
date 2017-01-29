/**
 * Created by jojo, sigga, usi
 */
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
        nextTextSize: "16",
        nextTextStyle: "",
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

    // --------------------------------------------------------------------------------------------
  	//								    Text: Change font, size and style
  	// --------------------------------------------------------------------------------------------

    $(".sizeSelect").change(function () {
        var str = $(".sizeSelect option:selected").val();
        $("#inputText").css('font-size', str + "px");
        settings.nextTextSize = str;
    })

    $(".fontSelect").change(function () {
        var str = $(".fontSelect option:selected").val();
        $("#inputText").css('font-family', str);
        settings.nextFont = str;
    })

    $("#italic").click(function () {
        $("#inputText").css("font-style", "italic");
        settings.nextTextStyle += "italic ";
    })

    $("#bold").click(function () {
        $("#inputText").css("font-weight", "bold");
        settings.nextTextStyle += "bold ";
    })

    $("#underline").click(function () {
        $("#inputText").css("font-style", "underline");
        //settings.nextTextStyle += "underline "; virkar ekki
    })

    // --------------------------------------------------------------------------------------------
  	//								          Change color
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
  	//							           Change shapes
  	// --------------------------------------------------------------------------------------------
  	$("#pen").click(function() {
        $(".fontChanger").hide();
        $(".changeFill").hide();
        $(".button").removeClass("active");
        $("#pen").addClass("active");
        settings.nextShape = "Pen";
        document.getElementById("myCanvas").style.cursor ="url(./logos/pen.png), auto";
  	});

  	$("#line").click(function() {
        $(".fontChanger").hide();
        $(".changeFill").hide();
        $(".button").removeClass("active");
        $("#line").addClass("active");
        settings.nextShape = "Line";
        document.getElementById("myCanvas").style.cursor = "default";
  	});

  	$("#rectangle").click(function() {
        $(".fontChanger").hide();
        $(".changeFill").show();
        $(".button").removeClass("active");
        $("#rectangle").addClass("active");
        settings.nextShape = "Rectangle";
        document.getElementById("myCanvas").style.cursor = "crosshair";
  	});

  	$("#circle").click(function() {
        $(".fontChanger").hide();
        $(".changeFill").show();
        $(".button").removeClass("active");
        $("#circle").addClass("active");
        settings.nextShape = "Circle";
        document.getElementById("myCanvas").style.cursor = "default";
  	});

    $("#text").click(function() {
        $(".fontChanger").hide();
        $(".changeFill").hide();
        $(".button").removeClass("active");
        $("#text").addClass("active");
        settings.nextShape = "Text";
        document.getElementById("myCanvas").style.cursor = "text";
    });

    $("#eraser").click(function() {
        $(".fontChanger").hide();
        $(".changeFill").hide();
        $(".button").removeClass("active");
        $("#fill").removeClass("active");
        $("#noFill").addClass("active");
        $("#eraser").addClass("active");
        settings.nextShape = "Eraser";
        document.getElementById("myCanvas").style.cursor ="src='./logos/eraser.png', auto";
    });

    $("#move").click(function() {
        $(".fontChanger").hide();
        $(".changeFill").hide();
        $(".button").removeClass("active");
        $("#move").addClass("active");
        settings.nextShape = "Move";
        document.getElementById("myCanvas").style.cursor = "crosshair";
    });

    $("#bucket").click(function() {
        $(".fontChanger").hide();
        $(".changeFill").hide();
        $(".button").removeClass("active");
        $("#bucket").addClass("active");
        settings.nextShape = "Bucket";
    });

    // --------------------------------------------------------------------------------------------
  	//							              Change Width
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
    //							              Change Fill
    // --------------------------------------------------------------------------------------------

    $("#fill").click(function() {
        $("#noFill").removeClass("active");
        $("#fill").addClass("active");
        settings.fill = true;
    });

    $("#noFill").click(function() {
        $("#fill").removeClass("active");
        $("#noFill").addClass("active");
        settings.fill = false;
    });

  	// --------------------------------------------------------------------------------------------
  	//							      Drawing and do stuff on canvas
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
            $("#inputText").css({"color": settings.nextColor, "background": "transparent", "border-style": "dotted", "border-color": "grey"});
            $("#inputText").css({"top":  e.pageY-15, "left": e.pageX}).show();
            settings.isDrawing = false;
            settings.textX = x;
            settings.textY = y;
        }
        else if(settings.nextShape === "Circle") {
            shape = new Circle(x, y, settings.nextColor, settings.nextWidth, "Circle", settings.fill);
        }
        else if(settings.nextShape === "Rectangle") {
            shape = new Rectangle(x, y, settings.nextColor, settings.nextWidth, "Rectangle", settings.fill);
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
        if(settings.isDrawing === true) {

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
                    else if(settings.dragShape.className == "Pen") {
                        context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
                        for(var i = settings.dragShape.points.length - 1; i >= 0; i--) {
                            settings.dragShape.points[i]
                        }
                        drawAll();
                    }
                    else if(settings.dragShape.className == "Text") {
                        context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
                        settings.dragShape.x = x - settings.dragOffx;
                        settings.dragShape.y = y - settings.dragOffy;
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



  	// --------------------------------------------------------------------------------------------
  	//							            Undo and Redo
  	// --------------------------------------------------------------------------------------------

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

    $("#saveButton").click(function () {
        var drawing = {
            title: "save",
            content: settings.shapes
        };
        var url = "http://localhost:3000/api/drawings";

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: url,
            data: JSON.stringify(drawing),
            success: function(data) {
                console.log("it worked");
            },
            error: function(xhr, err) {
                console.log("it failed");
            }
        });
    });

    $("#load").click(function () {
        var url = "http://localhost:3000/api/drawings/3";
        $.ajax({
            type: "GET",
            url: url,
            success: function(data) {
                var context = settings.canvas.getContext("2d");
                settings.shapes = [];
                settings.redoShapes = [];
                for(var s in data.content) {
                    var shape = undefined;
                    if(data.content[s].className === "Text") {
                        shape = new Text(data.content[s].x, data.content[s].y, data.content[s].color, data.content[s].text, data.content[s].font, data.content[s].size, data.content[s].className, data.content[s].width, data.content[s].height, data.content[s].style);
                    }
                    else if(data.content[s].className === "Circle") {
                        shape = new Circle(data.content[s].x, data.content[s].y, data.content[s].color, data.content[s].width, data.content[s].className, data.content[s].fill);
                        shape.setEnd(data.content[s].endX, data.content[s].endY);
                    }
                    else if(data.content[s].className === "Rectangle") {
                        shape = new Rectangle(data.content[s].x, data.content[s].y, data.content[s].color, data.content[s].width, data.content[s].className, data.content[s].fill);
                        shape.setEnd(data.content[s].endX, data.content[s].endY);
                    }
                    else if(data.content[s].className === "Line") {
                        shape = new Line(data.content[s].x, data.content[s].y, data.content[s].color, data.content[s].width, data.content[s].className);
                        shape.setEnd(data.content[s].endX, data.content[s].endY);
                    }
                    else if(data.content[s].className === "Eraser") {
                        shape = new Eraser(data.content[s].endX, data.content[s].endY, data.content[s].color, data.content[s].className);
                        for(var p in data.content[s].points) {
                            console.log(data.content[s].points[p]);
                            shape.points.push({x: data.content[s].points[p].x, y: data.content[s].points[p].y});;
                        }
                    }
                    else if(data.content[s].className === "Pen") {
                        shape = new Pen(data.content[s].x, data.content[s].y, data.content[s].color, data.content[s].width, data.content[s].className);
                        for(var p in data.content[s].points) {
                            console.log(data.content[s].points[p]);
                            shape.points.push({x: data.content[s].points[p].x, y: data.content[s].points[p].y});;
                        }
                    }
                    settings.shapes.push(shape);
                }

                context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
                drawAll();
            },
            error: function(xhr, err) {
                console.log("it failed");
            }
        });
    });

    // --------------------------------------------------------------------------------------------
  	//							         Clear everything
  	// --------------------------------------------------------------------------------------------

    $("#clear").click(function () {
        var context = settings.canvas.getContext("2d");
        var r = confirm("Are you sure you want to clear this masterpiece? You can not undo it.");
        if (r == true) {
            settings.shapes = [];
            context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
        } else {

        }
    });

    $("#inputText").keypress(function(e) {
        var key = e.which;
        var shape = undefined;
        if(key == 13){
            var text = $("#inputText").val();
            if(text !== "") {
                var context = settings.canvas.getContext("2d");
                console.log(context.measureText(text).width);
                context.font = settings.nextTextSize + "px " + settings.nextFont;
                shape = new Text(settings.textX, settings.textY, settings.nextColor, text, settings.nextFont, settings.nextTextSize, "Text", context.measureText(text).width, parseInt(settings.nextTextSize), settings.nextTextStyle);
                settings.shapes.push(shape);
                drawAll();
                $("#inputText").hide().val("");
                $(".fontChanger").hide();
                settings.nextFont = "Arial";
                $("#inputText").css('font-family', "Arial");
                settings.nextTextStyle = "";
                $("#inputText").css("font-style", "normal");
                $("#inputText").css("font-weight", "normal");

            }
        }
    });


    // --------------------------------------------------------------------------------------------
    //							            Helper functions
    // --------------------------------------------------------------------------------------------
    function drawAll(x,y) {
        var context = settings.canvas.getContext("2d");
        settings.shapes.forEach(function (item) {
            item.draw(context);
        })
    }
});
