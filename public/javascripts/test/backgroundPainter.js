$(document).ready(function blockLocation() {
    backgroundPainter();
});

function backgroundPainter() {
    let backgroundPainter=$('.backgroundPainter')[0];
    if(!backgroundPainter.getContext('2d')){return;}
    let pen=backgroundPainter.getContext('2d');
    // pen.beginPath();
    // pen.arc(100,175,15,0,Math.PI*2,true);
    // pen.clip();

    // pen.globalCompositeOperation='destination-over';
    // for (let i = 0; i < 5; i = i + 1) {
    //     if (i === 2) {
    //         pen.fillStyle='rgb(0,0,0)';
    //     }
    //     else {
    //         pen.fillStyle='rgb(255,255,255)';
    //     }
    //     pen.beginPath();
    //     pen.arc(150,150,20+20*i,Math.PI/2,Math.PI,false);
    //     pen.lineTo(150,150);
    //     pen.fill();
    // }
    // const ppx=pen.createLinearGradient(0,0,500,500);
    // ppx.addColorStop(0,'#ffffff');
    // ppx.addColorStop(1,'#000000');

    // pen.beginPath();
    // pen.fillStyle='rgb(255,255,255)';
    // pen.arc(300,300,50,Math.PI/2,Math.PI/2*5,false);
    // pen.lineTo(150,150);
    // pen.fill();

    class star{
        constructor() {
            this.centerX=500;
            this.centerY=500;
            this.centerR=200+130*Math.random();
            this.selfR=2+2*Math.random();
            this.total=2*Math.PI*Math.random();
        }

        draw(){
            pen.beginPath();
            pen.fillStyle='rgb(255,255,255)';
            pen.arc(this.centerX+this.centerR*Math.cos(this.total),this.centerY+this.centerR*Math.sin(this.total),this.selfR,0,2*Math.PI,true);
            pen.fill();
            this.total=this.total+0.00003*this.centerR;
        }
    }

    let stars=new Array();

    for (let i = 0; i < 50; i = i + 1) {
        stars[i]=new star();
    }

    function ppx() {
        pen.clearRect(0,0,window.innerWidth,window.innerHeight);

        // pen.globalCompositeOperation = 'source-over';
        // pen.fillStyle = 'rgb(50,50,35)';
        // pen.fillRect(0, 0, window.innerWidth, window.innerHeight);

        pen.globalCompositeOperation = 'lighter';

        for (let i = 0; i < 50; i = i + 1) {
            stars[i].draw();
        }
        window.requestAnimationFrame(ppx);
    }

    ppx();
}


function canvas(id,starscolor,starsamount,starsradius,movrange,speed,trailing){
    //宇宙特效
    const canvas = $('.backgroundPainter')[0];
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    let hue = starscolor;
    let stars = [];
    let count = 0;
    let maxStars = starsamount;//星星数量

    const canvas2 = document.createElement('canvas');
    const ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    let half = canvas2.width / 2;
    const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#CCC');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

// End cache

    function random(min, max) {
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }

        if (min > max) {
            let hold = max;
            max = min;
            min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
        let max = Math.max(x, y),
            diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / movrange;
        //星星移动范围，值越大范围越小，
    }

    let Star = function() {

        this.orbitRadius = random(maxOrbit(w, h));
        this.radius = random(starsradius, this.orbitRadius) / 8;
        //星星半径大小
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / speed;
        //星星移动速度
        this.alpha = random(2, 10) / 10;

        count++;
        stars[count] = this;
    }

    Star.prototype.draw = function() {
        let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            twinkle = random(10);

        if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed;
    }

    for (let i = 0; i < maxStars; i++) {
        new Star();
    }

    function animation() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = trailing; //尾巴
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
        ctx.fillRect(0, 0, w, h);

        ctx.globalCompositeOperation = 'lighter';
        for (let i = 1, l = stars.length; i < l; i++) {
            stars[i].draw();
        }

        window.requestAnimationFrame(animation);
    }

    animation();
}
