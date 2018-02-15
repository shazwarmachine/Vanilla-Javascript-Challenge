function remove(e){
    if(e.propertyName !='transform') return;
    this.classList.remove('playing');
}

function addClass(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`) ;
    const key=document.querySelector(`.box[data-key="${e.keyCode}"]`) ;
    if(!audio) return ;
    audio.currentTime=0;
    audio.play();
 
    key.classList.add('playing');
   
    
 }
const boxs=document.querySelectorAll('.box');
boxs.forEach(box => box.addEventListener('transitionend',remove));
window.addEventListener('keydown',addClass);