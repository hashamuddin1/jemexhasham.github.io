document.querySelector("#demo1").addEventListener("mouseenter",abc);

function abc(){
    document.querySelector("#demo1").style.color="green";
}
document.querySelector("#demo1").addEventListener("mouseout",xyz);
function xyz(){
    document.querySelector("#demo1").style.color="white";
}
document.querySelector("#demo2").addEventListener("mouseenter",abc1);
function abc1(){
    document.querySelector("#demo2").style.color="green";
}
document.querySelector("#demo2").addEventListener("mouseout",xyz1);
function xyz1(){
    document.querySelector("#demo2").style.color="white";
}
document.querySelector("#demo3").addEventListener("mouseenter",abc2);
function abc2(){
    document.querySelector("#demo3").style.color="green";
}
document.querySelector("#demo3").addEventListener("mouseout",xyz2);
function xyz2(){
    document.querySelector("#demo3").style.color="white";
}
document.querySelector("#demo4").addEventListener("mouseenter",abc3);
function abc3(){
    document.querySelector("#demo4").style.color="green";
}
document.querySelector("#demo4").addEventListener("mouseout",xyz3);
function xyz3(){
    document.querySelector("#demo4").style.color="white";
}
let typed1=new Typed("#typedemo",{
    stringsElement:"#animate",
    typeSpeed:30,
    backSpeed:30,
    loop:true,
});

