class Shape {
    constructor(x, y, color, width, className, fill){
        //x, y eru hnit upphafsstadsetningar
        this.className = className;
        this.x = x;
        this.y = y;
        this.endX = x;
        this.endY = y;
        this.color = color;
        this.width = width;
        this.fill = fill;
    }

    setEnd(x,y) {
        this.endX = x;
        this.endY = y;
    }
    intersects(rect) {
        //todo
    }
}

class Rectangle extends Shape {
    constructor(x, y, color, width, className, fill){
        super(x, y, color, width, className, fill);
    }

    draw(context) {
        var x = Math.min(this.endX, this.x),
  		    y = Math.min(this.endY, this.y),
  		    w = Math.abs(this.endX - this.x),
  			h = Math.abs(this.endY - this.y);
        context.lineWidth = this.width;
        if(this.fill){
            context.fillStyle = this.color;
            context.fillRect( x, y, w, h );
        }
        else {
            context.strokeStyle = this.color;
            context.strokeRect(x, y, w, h);
        }
    }

    intersects(rect) {
        return !( rect.x           > (this.x + this.w) ||
        (rect.x + rect.w) <  this.x           ||
        rect.y           > (this.y + this.h) ||
        (rect.y + rect.h) <  this.y);
    }
    contains(x, y) {
        return  ((this.x <= x) && (this.x + Math.abs(this.endX - this.x) >= x) &&
                (this.y <= y) && (this.y + Math.abs(this.endY - this.y) >= y)) ||
                ((this.endX <= x) && (this.endX + Math.abs(this.x - this.endX) >= x) &&
                (this.endY <= y) && (this.endY + Math.abs(this.y - this.endY) >= y));
    }
}

class Circle extends Shape {
    constructor(x, y, color, width, className, fill){
        super(x, y, color, width, className, fill);
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.computeRadius(this.endX, this.endY), 0, 2 * Math.PI, false);
        //context.lineWidth = 2;
        context.lineWidth = this.width;
        if(this.fill){
            context.fillStyle = this.color;
            context.fill();
        }
        else {
            context.strokeStyle = this.color;
            context.stroke();
        }

    }

    computeRadius(x,y){
        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    }

    intersects(rect){
        // var x = Math.abs(this.x - rect.x-rect.w/2);
        // var y = Math.abs(this.y - rect.y-rect.h/2);
        // if (x > (rect.w/2 + this.computeRadius(this.endX, this.endY))){
        //     return false;
        // }
        // if (y > (rect.h/2 + this.computeRadius(this.endX, this.endY))) {
        //     return false;
        // }
        // if (x <= (rect.w/2)) {
        //     return true;
        // }
        // if (y <= (rect.h/2)) {
        //     return true;
        // }
        // var dx = x-rect.w/2;
        // var dy = y-rect.h/2;
        // return(dx*dx+dy*dy <= (this.computeRadius(this.endX, this.endY)*this.computeRadius(this.endX, this.endY)));
        var distX = Math.abs(this.x - rect.x-rect.w/2);
        var distY = Math.abs(this.y - rect.y-rect.h/2);

        if (distX > (rect.w/2 + this.computeRadius(this.endX, this.endY))) { return false; }
        if (distY > (rect.h/2 + this.computeRadius(this.endX, this.endY))) { return false; }

        if (distX <= (rect.w/2)) { return true; }
        if (distY <= (rect.h/2)) { return true; }

        var dx=distX-rect.w/2;
        var dy=distY-rect.h/2;
        return (dx*dx+dy*dy<=(this.computeRadius(this.endX, this.endY)*this.computeRadius(this.endX, this.endY)));
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
        console.log(x + " " + y );
        console.log(this.x + " " + this.y );
        console.log(this.endX + " " + this.endY );
        var slope = ((this.endY - this.y)/(this.endX - this.x));
        console.log(slope);
        var yZero = (this.y - (slope * this.x));
        console.log(yZero);
        return (((slope * x) + yZero) === y);
    }
}

class Text extends Shape {
    constructor(x, y, color, text, font, size, className, width, height, style){
        super(x, y, color, width, className);
        this.text = text;
        this.font = font;
        this.size = size;
        this.height = height;
        this.style = style;
    }

    draw(context) {
        context.font = this.style + this.size + "px " + this.font;
        context.fillStyle = this.color;
        context.fillText(this.text, this.x, this.y);
    }

    contains(x, y) {
        return (x >= this.x && x <= this.x + this.width && y >= this.y - this.height && y <= this.y);
    }
}

class Pen extends Shape {
    constructor(x, y, color, width, className){
        super(x, y, color, width, className);
        this.points = [];
    }

    draw(context) {
        context.beginPath();
        context.lineCap = 'round';
        context.lineJoin = 'round';
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

class Eraser extends Pen {
    constructor(x, y, color, className){
        super(x, y, color, 18, className);
    }


    contains(x, y) {

    }
}
