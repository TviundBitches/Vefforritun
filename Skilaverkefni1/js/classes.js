/**
 * Created by jojo on 16.1.2017.
 */
//context sama og ur hinu skjalinu
class Shape {
    constructor(x, y, color){
        //x, y eru hnit upphafsstadsetningar
        this.x = x;
        this.y = y;
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
    draw(context, x, y) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, x, y);
    }
}

class Circle extends Shape {
    constructor(x, y, color){
        super(x, y, color);
    }
    draw(context,x,y) {
        context.beginPath();
        context.arc(this.x, this.y, this.computeRadius(x,y), 0, 2 * Math.PI, false);
        context.fillStyle = "#8ED6FF";
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = "black";
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
        context.moveTo(0, 0);
        context.lineTo(this.x, this.y);
        context.stroke();
    }
}

class Text extends Shape {
    constructor(x, y, color){
        super(x, y, color);
    }
    draw(context) {

    }
}

class Pen extends Shape {
    constructor(x, y, color){
        super(x, y, color);
        this.points = [];
    }
    setEnd(x,y) {
        this.points.push({x: this.x, y: this.y});
    }
    draw(context) {
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x, this.y);
        context.stroke();
    }
}
