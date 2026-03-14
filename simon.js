let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"];
let started=false;
let level=0;
let h3=document.querySelector('h3');
let h4=document.createElement("h4");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    } 
});
function gamrFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function() {
        btn.classList.remove("flash");
       
    }, 150);
}
function userPress(btn) {
    btn.classList.add("user");

    setTimeout(function() {
        btn.classList.remove("user");
       
    }, 150);
}
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=btns[randomIndex];
    let randBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    gamrFlash(randBtn);
}
function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game over!Your score was ${level}<br><pre>  Press any key to start</pre>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="rgb(31, 63, 86)";
        },100);
        reset();  
    }
}
function btnPress(){
    let btn=this;
    userPress(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;  
}
//raviranjanpathak
function openDialog() {
  document.getElementById("dialog").style.display = "block";
}
function closeDialog() {
  document.getElementById("dialog").style.display = "none";
}
