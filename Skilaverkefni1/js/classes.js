//context sama og ur hinu skjalinu
class Shape {
    constructor(x, y, color, width){
        //x, y eru hnit upphafsstadsetningar
        this.x = x;
        this.y = y;
        this.endX = x;
        this.endY = y;
        this.color = color;
        this.width = width;
    }

    setEnd(x,y) {
        this.endX = x;
        this.endY = y;
    }
}

class Rectangle extends Shape {
    constructor(x, y, color, width){
        super(x, y, color, width);
    }
    draw(context) {
        var x = Math.min(this.endX, this.x),
  		    y = Math.min(this.endY, this.y),
  		    w = Math.abs(this.endX - this.x),
  			h = Math.abs(this.endY - this.y);
        context.lineWidth = this.width;
        context.strokeStyle = this.color;
        context.strokeRect(x, y, w, h);
    }
}

class Circle extends Shape {
    constructor(x, y, color, width){
        super(x, y, color, width);
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.computeRadius(this.endX, this.endY), 0, 2 * Math.PI, false);
        //context.lineWidth = 2;
        context.lineWidth = this.width;
        context.strokeStyle = this.color;
        context.stroke();
    }

    computeRadius(x,y){
        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    }
}

class Line extends Shape {
    constructor(x, y, color, width){
        super(x, y, color, width);
    }

    draw(context) {
        context.beginPath();
        context.lineWidth = this.width;
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
        context.fillStyle = this.color;
        context.fillText(this.text, this.x, this.y);
    }
}

class Pen extends Shape {
    constructor(x, y, color, width){
        super(x, y, color, width);
        this.points = [];
    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.lineWidth = this.width;
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
        context.lineWidth = 18;
        context.moveTo(this.x, this.y);
        this.points.forEach(function (item) {
            context.lineTo(item.x, item.y);
            context.stroke();
        })
    }
}
