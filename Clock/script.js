

const sHands=document.querySelector('.secline');
const mHands=document.querySelector('.minline');
const hrHands=document.querySelector('.hourline');

function setDate(){
    const now=new Date();

    const seconds=now.getSeconds();
    const minutes=now.getMinutes();
    const hours=now.getHours();

    const secondDegree=(seconds/60)*360;
    const minDegree=(minutes/60)*360;
    const hourDegree=(hours/12)*360;
    if(seconds==0){ 
        sHands.style.transitionDuration = '0s'; 
        mHands.style.transitionDuration = '0s'; 
        hrHands.style.transitionDuration = '0s'; } 
    else { 
        sHands.style.transitionDuration = '0.05s';
        mHands.style.transitionDuration = '0.05s'; 
        hrHands.style.transitionDuration = '0.05s'
        }
   
    sHands.style.transform=`rotate(${secondDegree+90}deg)`;
    mHands.style.transform=`rotate(${minDegree+90}deg)`;
    hrHands.style.transform=`rotate(${hourDegree+90}deg)`;

}

setInterval(setDate,1000);