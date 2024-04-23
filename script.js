
function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 50;
    }

    this.moveLeft = function(){
        this.left -= 50;
    }

    this.moveBottom = function(){
        this.top += 50;
    }

    this.moveTop = function(){
        this.top -= 50;
    }
}

var hero = new Hero('pikachu.png', 0, 0, 200);
var direction = 0;

function movingObject(){
    switch (direction){
        case 0:
            if(hero.left < window.innerWidth - hero.size-20) hero.moveRight();
            else direction = 1;
            break;
        case 1:
            if(hero.top < window.innerHeight - hero.size-20) hero.moveBottom();
            else direction = 2;
            break;
        case 2:
            if(hero.left > 0) hero.moveLeft();
            else direction = 3;
            break;
        default:
            if(hero.top > 0) hero.moveTop();
            else direction = 0;
            break;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(movingObject, 100)
}

movingObject();