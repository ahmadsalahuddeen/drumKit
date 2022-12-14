var buttonLength = document.querySelectorAll(".drum").length;

//Detect meow
document.querySelector(".meow").addEventListener("click", function(){
    var playMeow = new Audio('sounds/meow.mp3');
    playMeow.play();
})

// detect button press
for( i = 0; i < buttonLength; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
var buttonInnerHtml = this.innerHTML;
makeSound(buttonInnerHtml);
animateButton(buttonInnerHtml);
    });

}

// Detect keypress

document.addEventListener("keypress", (event)=>{
makeSound(event.key);
animateButton(event.key);
})

// play sound
function makeSound(key){

switch (key) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
    
        case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
    
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;    
    
    
        case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
    
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
            case "k":
                var kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();
                break;
                case "l":
               var crash = new Audio('sounds/crash.mp3');
              crash.play();
        break;
             case "m":
            var meow = new Audio('sounds/meow.mp3');
            meow.play();
            break;
            // case "Made with 💜 by swalahCodes":
            // var meow = new Audio('sounds/meow.mp3');
            // meow.play();
            // break;
    default: console.log(buttonInnerHtml);
        break;
}

}
function animateButton(buttonkey){
    var activeButton = document.querySelector("." + buttonkey).classList;
 activeButton.add("pressed");
setTimeout(() => {
    activeButton.remove("pressed");

}, 100);
}