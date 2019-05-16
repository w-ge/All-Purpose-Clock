let sec = 0;
let min = 0;
let time = "";
let decTime = 0;
let audio = $("#myAudio")[0];
function updateDisplay() {
    time = "";
    if (min <= 9) {
        time += "0";
    }
    time += min + ":";

    if (sec <= 9) {
        time += "0";
    }

    time += sec;
    $(".timerface").text(time);
}

function decreaseTime() {
    // Stop Timer if 00:00 is Reached
    if (sec === 0 && min === 0) {
        clearInterval(decTime);
        audio.play();
    }
    else {
        sec--;
    }
    
   
    // Decrement Time
    if (sec < 0) {
        min--;
        sec = 59;
    }
    updateDisplay();
   
}
$("document").ready(() => {

    // Mouseover Effect for Buttons
    $(".button").on("mouseover", (event) => {
        $(event.currentTarget).addClass("buttonOver");
    }).on("mouseout", (event) => {
        $(event.currentTarget).removeClass("buttonOver");
    });

    // Add Minutes 
    $("#minTop").on("click", () => {
        min = (min + 1) % 99;
        updateDisplay();
    });

    // Add Seconds 
    $("#secTop").on("click", () => {
        sec = (sec + 1) % 60;
        updateDisplay();
    });

    // Subtract Minutes 
    $("#minBot").on("click", () => {
        min = (min - 1) % 99;
        if (min < 0) {
            min = 99;
        }
        updateDisplay();
    });

    // Subtract Seconds 
    $("#secBot").on("click", () => {
        sec = (sec - 1) % 60;
        if (sec < 0) {
            sec = 59;
        }
      
        updateDisplay();
    });

    // Start Timer
    $("#start").on("click", () => {
        $("#start-title").hide();
        $("#start").hide();
        $(".buttonArrowT").hide();
        $(".buttonArrowB").hide();
        $("#reset").show();
        decTime = setInterval(decreaseTime, 1000);
    });

    // Stop Timer
    $("#reset").on("click", () => {
        $("#reset").hide();
        $("#start-title").show();
        $("#start").show();
        $(".buttonArrowT").show();
        $(".buttonArrowB").show();
        clearInterval(decTime);
        sec = 0;
        min = 0;
        updateDisplay();
        audio.pause();
        sound.currentTime = 0;
    });


    // Toggle Menu
    $(".arrow").on("click", () => {
        $(".menu").slideToggle(500);
    });
});
