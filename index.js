//-----Detecting Button Pressed-----
//adding EventListener of "click" to all Drum Buttons to tigger function handleClick 
var drumButtons = document.querySelectorAll(".drum"); // ".drum" is more specific, do not use "button" because incase you add an element button somewhere else

for(var i = 0; i < drumButtons.length; i++){
    drumButtons[i].addEventListener("click", handleClick);
    //OR using anonymous function --> drumButtons[i].addEventListener("click", function(){ blah blah blah }); 
}

function handleClick(){
    //"this" will be each "button" element, we are grabbing the text from the button element
    var buttonText = this.textContent; 

    makeSound(buttonText); 

    buttonAnimation(buttonText); 
}


//-----Detecting Keyboard pressed----- 
//Detecting keyboard to play sound, pass in the "event" to get the details of which key pressed from keyboard
document.addEventListener("keydown", function(event){ 
    makeSound(event.key); 

    buttonAnimation(event.key);
    //uncomment to see what event looks like in console log 
    //console.log(event); 
});




//function to play sound based on key 
function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play(); 
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play(); 
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play(); 
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play(); 
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play(); 
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play(); 
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play(); 
            break;
        default:
            break;
    }
}


//function to animate the buttons when pressed
function buttonAnimation(key){
    //get the button element
    var activeButton = document.querySelector("." + key);

    //add the class to animate the button
    activeButton.classList.add("pressed"); 

    //remove the animation class after 100 sec 
    setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100); 
}