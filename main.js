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
    let choice=[1,3,5,7];
    index=Math.floor(Math.random()*4);
    choice=choice[index];
    arc=360/8;
    landingPosition=(choice*arc)-arc/2;
    let initTime=new Date();
    initTime=initTime.getTime();
    thetaF=360*Math.ceil(Math.random()*15)+landingPosition-5;
    omega=0;
    alpha=0.0005;
    theta=0;
    while(theta<thetaF){
        if(theta==0.5*thetaF){
            alpha=-0.0005;
        }
        currTime=new Date();
        currTime=currTime.getTime();
        t=currTime-initTime;
        theta=omega*t+(1/2)*(alpha)*(t**2);
        spinwheel.style.rotate=`${theta}deg`;
        await sleep(10);
    }
    let confetti=new Confetti("bod");
    confetti.setCount(75);
    confetti.setSize(1);
    confetti.setPower(25);
    confetti.setFade(false);
    confetti.destroyTarget(true); 
}