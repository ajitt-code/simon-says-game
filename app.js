let gameSeq = [];
let userSeq = [];

let started = false ;
let level = 0 ;

let btns = ["red","yellow","green","purple"]

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress",function (){
    if(started == false){
        started = true ;
        console.log("Game Started");
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    level++;
    h2.innerText =`level ${level}`;
    userSeq =[];
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
    console.log(gameSeq);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
       if(gameSeq.length == userSeq.length){
        setTimeout(levelUp,1000);
       }
    }
    else{
        h2.innerHTML =`Game Over ! Your Score Was <b> ${level} </b> <br> Press Any key to restart`
        document.querySelector("body").style.backgroundColor = "red" ;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white" ;
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this ;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns ){
    btn.addEventListener("click",btnPress);
}
let highestScore = 0 ;
function reset(){

    highestScore = large(highestScore , level);
    h3.innerText = ` Highest Score Was ${highestScore} `;
    gameSeq = [];
    userSeq = [];

    started = false ;
    level = 0 ;

}

function large(largest , current){
    if(largest>current){
        largest = largest ; 
    }
    else{
        largest = current ;
    }
    return largest ;
}