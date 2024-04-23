var direction = 0;
const img = document.getElementById("hero");
const obj = new Object(img);

function Object(imageElement){
    this.imageElement = imageElement;
    this.left = parseInt(imageElement.style.left);
    this.top = parseInt(imageElement.style.top);
    this.size = imageElement.offsetHeight;

    this.getSize = function () {
        return this.size;
    }

    console.log(this.size);
    this.moveRight = function(){
        this.left += 50;
        this.imageElement.style.left = this.left + "px";
    }

    this.moveLeft = function(){
        this.left -= 50;
        this.imageElement.style.left = this.left + "px";
    }

    this.moveBottom = function(){
        this.top += 50;
        this.imageElement.style.top = this.top + "px";
    }

    this.moveTop = function(){
        this.top -= 50;
        this.imageElement.style.top = this.top + "px";
    }
}

function freeMoving(){
    console.log(obj.left);
    console.log(window.innerWidth - obj.getSize());
    switch (direction) {
        case 0:
            if (obj.left < window.innerWidth - obj.getSize() - 20) obj.moveRight();
            else direction = 1;
            break;
        case 1:
            if (obj.top < window.innerHeight - obj.getSize() - 20) obj.moveBottom();
            else direction = 2;
            break;
        case 2:
            if (obj.left > 0) obj.moveLeft();
            else direction = 3;
            break;
        default:
            if (obj.top > 0) obj.moveTop();
            else direction = 0;
            break;
    }
    setTimeout(freeMoving, 200);
}

freeMoving();