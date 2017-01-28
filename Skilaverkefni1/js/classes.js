//context sama og ur hinu skjalinu
class Shape {
    constructor(x, y, color, width, className){
        //x, y eru hnit upphafsstadsetningar
        this.className = className;
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
    constructor(x, y, color, width, className){
        super(x, y, color, width, className);
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

    contains(x, y) {
        return  ((this.x <= x) && (this.x + Math.abs(this.endX - this.x) >= x) &&
                (this.y <= y) && (this.y + Math.abs(this.endY - this.y) >= y)) ||
                ((this.endX <= x) && (this.endX + Math.abs(this.x - this.endX) >= x) &&
                (this.endY <= y) && (this.endY + Math.abs(this.y - this.endY) >= y));
    }
}

class Circle extends Shape {
    constructor(x, y, color, width, className){
        super(x, y, color, width, className);
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

    contains(x, y) {

    }
}

class Line extends Shape {
    constructor(x, y, color, width, className){
        super(x, y, color, width, className);
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

    contains(x, y) {
        var slope = ((this.endY - this.y)/(this.endX - this.x));
        var yZero = (this.y - (slope * this.x));
        return (((slope * x) + yZero) === y);
    }
}

class Text extends Shape {
    constructor(x, y, color, text, font, size, className){
        super(x, y, color, className);
        this.text = text;
        this.font = font;
        this.size = size;
    }

    draw(context) {
        context.font = this.size + this.font;
        context.fillStyle = this.color;
        context.fillText(this.text, this.x, this.y);
    }

    contains(x, y) {

    }
}

class Pen extends Shape {
    constructor(x, y, color, width, className){
        super(x, y, color, width, className);
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

    contains(x, y) {
        for(var i = this.points.length - 1; i >= 0; i--) {
            if(this.points[i].x == x && this.points[i].y == y)
                return true;
        }
    }
}

class Eraser extends Shape {
    constructor(x, y, color, className){
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

    contains(x, y) {

    }
}
