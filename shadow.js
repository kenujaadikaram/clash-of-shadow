for (let i = 1; i < 10; i++) {
    document.getElementById('d'+i).style.top = '50px';
    console.log(i);
    let num =( 150*i)-150;
document.getElementById('d'+i).style.left = num+'px';

}
for (let i = 10; i < 19; i++) {
document.getElementById('d'+i).style.top = '200px';
console.log(i);
let num = (150*(i-9))-150;
document.getElementById('d'+i).style.left = num+'px';

}
for (let i = 19; i < 28; i++) {
document.getElementById('d'+i).style.top = '350px';
console.log(i);
let num = (150*(i-18))-150;
document.getElementById('d'+i).style.left = num+'px';

}
for (let i = 28; i < 37; i++) {
document.getElementById('d'+i).style.top = '500px';
console.log(i);
let num = (150*(i-27))-150;
document.getElementById('d'+i).style.left = num+'px';

}
let ch ='url("sonic.gif")';
let l= 28;
let el=9;
eschar();
document.getElementById('d28').style.backgroundImage=ch;
document.getElementById('d28').style.backgroundSize='150px 150px';
window.addEventListener('keydown',event=>{
let key =event.key;
if(key=="ArrowLeft"){
    
    if(l!=1){
        if(l!=10){
            if(l!=19){
                if(l!=28){
document.getElementById('d'+l).style.backgroundImage='';
l=l-1;
schar();
}
            }
        }
    }

}
if(key=="ArrowRight"){

    if(l!=36){
        if(l!=27){
            if(l!=18){
                if(l!=9){
document.getElementById('d'+l).style.backgroundImage='';
l=l+1;
schar();
    }
}
}
    }
}
if(key=="a"){
    
    if(l!=1){
        if(l!=10){
            if(l!=19){
                if(l!=28){
document.getElementById('d'+l).style.backgroundImage='';
l=l-1;
schar();
}
            }
        }
    }

}
if(key=="d"){

    if(l!=36){
        if(l!=27){
            if(l!=18){
                if(l!=9){
document.getElementById('d'+l).style.backgroundImage='';
l=l+1;
schar();
    }
}
}
    }
}
if(key=="ArrowUp"){
    if(l!==1){
        if(l!==2){
            if(l!==3){
                if(l!==4){
                    if(l!==5){
                        if(l!==6){
                            if(l!==7){
                                if(l!==8){
                                    if(l!==9){

    if(ch=='url("tails.gif")'){
        document.getElementById('d'+l).style.backgroundImage='';
        l=l-9;
        schar();
    }else if(ch=='url("sonic.gif")'){
    document.getElementById('d'+l).style.backgroundImage='';
     l=l-9;
     schar();
     setTimeout(up2, 500);
    }else if(ch=='url("knuckles.gif")'){
        setTimeout(up1, 500);
    }
}
}
}
}
}
}
}
}
}
}
if(key=="ArrowDown"){ 
    if(l!=28){
        if(l!=29){
            if(l!=30){
                if(l!=31){
                    if(l!=32){
                        if(l!=33){
                            if(l!=34){
                                if(l!=35){
                                    if(l!=36){

    if(ch=='url("tails.gif")'){
        document.getElementById('d'+l).style.backgroundImage='';
        l=l+9;
        schar();
    
    }

}
}
}
}
}
}
}
}
}
}
if(key=="w"){
    if(l!==1){
        if(l!==2){
            if(l!==3){
                if(l!==4){
                    if(l!==5){
                        if(l!==6){
                            if(l!==7){
                                if(l!==8){
                                    if(l!==9){

    if(ch=='url("tails.gif")'){
        document.getElementById('d'+l).style.backgroundImage='';
        l=l-9;
    }else if(ch=='url("sonic.gif")'){
    document.getElementById('d'+l).style.backgroundImage='';
     l=l-9;
     schar();
     setTimeout(up2, 500);
    }else if(ch=='url("knuckles.gif")'){
        setTimeout(up1, 500);
    }
}
}
}
}
}
}
}
}
}
}
if(key=="s"){ 
    if(l!==28){
        if(l!==29){
            if(l!==30){
                if(l!==31){
                    if(l!==32){
                        if(l!==33){
                            if(l!==34){
                                if(l!==35){
                                    if(l!==36){

    if(ch=='url("tails.gif")'){
        document.getElementById('d'+l).style.backgroundImage='';
        l=l+9;
        schar();
    }
}
}
}
}
}
}
}
}
}
}
if(key=='1'){
ch='url("sonic.gif")';
document.getElementById('d'+l).style.backgroundImage='';
l=28;
schar();
}
if(key=='2'){
ch='url("tails.gif")';
document.getElementById('d'+l).style.backgroundImage='';
l=28;
schar();
}
if(key=='3'){
ch='url("knuckles.gif")';
document.getElementById('d'+l).style.backgroundImage='';
l=28;
schar();
}
if(key=='a'){
    if(key=='q'){
        alert();
    }
}
shadowai();
});
function schar(){
    document.getElementById('d'+l).style.backgroundImage=ch;
    document.getElementById('d'+l).style.backgroundSize='150px 150px';
}
function eschar(){
    document.getElementById('d'+el).style.backgroundImage='url("shadow.gif")';
    document.getElementById('d'+el).style.backgroundSize='150px 150px';
}
function up1(){
    document.getElementById('d'+l).style.backgroundImage='';
    l=l-9;
    schar();
setTimeout(up2,500);
}
function up2(){
document.getElementById('d'+l).style.backgroundImage='';
l=l+9;
schar();
}

function shadowai(){
    document.getElementById('d'+el).style.backgroundImage='';
     el=Math.round(Math.random()*36);
    
     eschar();
}
