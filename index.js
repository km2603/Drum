
for(let i = 0 ; i<document.querySelectorAll("button").length ; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
    
    let butpress= this.innerHTML;
    makesound(butpress);
    makeAnimation(butpress);
    
});
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    makeAnimation(event.key);
})

function makesound(key){
switch(key){
        case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case "j":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
        case "k":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case "l":
        let kick = new Audio("sounds/KickBass.mp3");
        kick.play();
        break;
        default:console.log(this.innerHTML);
        break;
    }
}

function makeAnimation(CurrentKey){
let activebutton = document.querySelector("." + CurrentKey);

activebutton.classList.add("pressed");
setTimeout(function(){
    activebutton.classList.remove("pressed");
},100)
}