let sec = 0;
let min = 0;
let time = "";

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


    // Toggle Menu
    $(".arrow").on("click", () => {
        $(".menu").slideToggle(500);
    });
});
