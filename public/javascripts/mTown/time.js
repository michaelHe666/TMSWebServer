$(document).ready(function () {
    mTownDate();
    // decoration();
});

function mTownDate() {
    const temp=new Date();
    function addZero(foo) {
        if(foo<10){return '0'+foo.toString();}
        else {return foo.toString();}
    }
    $('.mTown_time>span:nth-child(2):first').html(temp.getFullYear().toString()+addZero(temp.getMonth()+1)+addZero(temp.getDate()));
}

//using prim method
function decoration() {
    const height=window.innerHeight;
    const rem=parseFloat(Math.max(6,height/100).toFixed(2));
    $('.mTown_time_background>canvas:first').attr({width:$('.mTown_time:first').css('width'),height:$('.mTown_time:first').css('height')});
    const backgroundPainter=$('.mTown_time_background>canvas:first')[0].getContext('2d');
    const row=2*Math.floor(0.5*(height/rem-3))+1;
    const visitedPoints=new Array();
    for(let i=0;i<43;i=i+1){
        visitedPoints[i]=new Array();
        for(let k=0;k<row;k=k+1){
            visitedPoints[i][k]=0;
        }
    }
    let x=0;
    let y=0;
    for(let i=0;i<11*(row+1);i=i+1){
        visitedPoints[x][y]=1;
        let checker=false;
        do {
            let temp=new Array();
            if((x+2<43)&&(visitedPoints[x+2][y]===0)){temp.push([2,0]);}
            if((x-2>=0)&&(visitedPoints[x-2][y]===0)){temp.push([-2,0]);}
            if((y+2<43)&&(visitedPoints[x][y+2]===0)){temp.push([0,2]);}
            if((y-2>=0)&&(visitedPoints[x][y-2]===0)){temp.push([0,-2]);}
            if(temp.length===0){
                do {
                    x=2*Math.floor(22*Math.random());
                    // y=2*Math.floor(0.5*(row+1)* Math.random());
                    y=Math.floor(row* Math.random());
                }
                while (visitedPoints[x][y] === 1)
            }
            else {
                let randomDirection=Math.floor(temp.length*Math.random());
                x=x+temp[randomDirection][0];
                y=y+temp[randomDirection][1];
                visitedPoints[x-0.5*temp[randomDirection][0]][y-0.5*temp[randomDirection][1]]=1;
                visitedPoints[x][y]=1;
                console.log(x+','+y);
                checker = true;
            }
        }
        while (checker === false)
    }
    backgroundPainter.fillStyle='#f3f3f3';
    const foo=Math.ceil(rem);
    for(let i=0;i<43;i=i+1){
        for(let k=0;k<row;k=k+1){
            if(visitedPoints[i][k]===1){
                backgroundPainter.fillRect(Math.ceil((1+i)*rem),Math.ceil((1+k)*rem),foo,foo);
            }
        }
    }
}