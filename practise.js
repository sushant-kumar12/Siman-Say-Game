
let gameseq = [];
let userseq = [];

let btns = ["yellow","red","purple","blue"];

let started = false;
let level = 0;
let highest = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(started == false){
        console.log("game is started");
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup() {
    userseq = [];
    level++;
    if(highest<level) {
        highest = level;
    }
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randBtn);
}

function checkAns(idx) {
    if(userseq[idx]== gameseq[idx]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelup,1000);
        }
    }else {
        h2.innerHTML =`Game Over! Your Score was <b>${level}</b> <br> Press any key to start.<br> <b>Highest score : ${highest}</b>`;
        document.querySelector("body").style.background = "red";
        setTimeout(function() {
            document.querySelector("body").style.background = "white";
        },150);
        reset();
    }
}
    function btnpress() {
        let btn = this;
        userflash(btn);
        usercolor = btn.getAttribute("id");
        userseq.push(usercolor);
        checkAns(userseq.length-1);
    }
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
