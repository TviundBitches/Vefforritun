/**
 * Created by jojo on 16.1.2017.
 */
//context sama og ur hinu skjalinu
class Shape {
    constructor(x, y, color){
        //x, y eru hnit upphafsstadsetningar
        this.x = x;
        this.y = y;
        this.endX = x;
        this.endY = y;
        this.color = color;
    }

    setEnd(x,y) {
        this.endX = x;
        this.endY = y;
    }
}

class Rectangle extends Shape {
    constructor(x, y, color){
        super(x, y, color);
    }
    draw(context) {
        var x = Math.min(this.endX, this.x),
  		    y = Math.min(this.endY, this.y),
  		    w = Math.abs(this.endX - this.x),
  			h = Math.abs(this.endY - this.y);
        context.strokeStyle = this.color;
        context.strokeRect(x, y, w, h);
    }
}

class Circle extends Shape {
    constructor(x, y, color){
        super(x, y, color);
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.computeRadius(this.endX, this.endY), 0, 2 * Math.PI, false);
        //context.lineWidth = 2;
        context.strokeStyle = this.color;
        context.stroke();
    }

    computeRadius(x,y){
        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    }
}

class Line extends Shape {
    constructor(x, y, color){
        super(x, y, color);
    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.moveTo(this.x, this.y);
        context.lineTo(this.endX, this.endY);
        context.stroke();
		context.closePath();
    }
}

class Text extends Shape {
    constructor(x, y, color, text, font, size){
        super(x, y, color);
        this.text = text;
        this.font = font;
        this.size = size;
    }

    draw(context) {
        context.font = this.size + this.font;
        context.fillText(this.text, this.x, this.y);
    }
}

class Pen extends Shape {
    constructor(x, y, color){
        super(x, y, color);
        this.points = [];
    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.moveTo(this.x, this.y);
        this.points.forEach(function (item) {
            context.lineTo(item.x, item.y);
            context.stroke();
        })
    }
}

class Eraser extends Shape {
    constructor(x, y, color){
        super(x, y, color);
        this.points = [];
    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.moveTo(this.x, this.y);
        this.points.forEach(function (item) {
            context.lineTo(item.x, item.y);
            context.stroke();
        })
    }
}
