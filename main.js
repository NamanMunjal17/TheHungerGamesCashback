window.onload=function(){
    spinwheel=document.getElementById("spin");
    bod=document.getElementById("bod");
    rect1=spinwheel.getBoundingClientRect();
    rect=bod.getBoundingClientRect();
    pointer=document.getElementById("pointer");
    p=pointer.getBoundingClientRect();
    pmid=(p.right-p.left);
    mid=((rect.right-rect.left)/2)-pmid;
    pointer.style.top=`${rect1.top-50}px`;
    pointer.style.left=`${mid}px`;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function spin(){
    spinwheel.style.rotate=`0deg`;
    bod=document.getElementById("bod");
    spinwheel=document.getElementById("spin");
    let choice=[-22.5,-112.5,-112.5,-112.5,-112.5,-112.5,-112.5,-112.5,-202.5,-292.5,-112.5,-112.5,-202.5];
    index=Math.floor(Math.random()*choice.length);
    choice=choice[index];
    arc=360/8;
    landingPosition=choice;
    let initTime=new Date();
    initTime=initTime.getTime();
    thetaF=-360*Math.ceil(Math.random()*15)-landingPosition;
    omega=0;
    alpha=((thetaF*2)/(2140**2));
    console.log(alpha)
    theta=0;
    var audio = new Audio('tadaa.mp3');
    audio.play();
    while(theta>=thetaF){
        currTime=new Date();
        currTime=currTime.getTime();
        t=currTime-initTime;
        theta=omega*t+(1/2)*(alpha)*(t**2);
        spinwheel.style.rotate=`${theta}deg`;
        await sleep(10);
    }
    if(theta>thetaF || theta<thetaF){
        theta=thetaF;
        spinwheel.style.rotate=`${theta}deg`;
    }
    toggleConfetti();
}