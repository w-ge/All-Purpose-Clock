let milli = 0;
let sec = 0;
let min = 0;
let time = "";
let run = "";
function timerCount() {
    time = "";
    if (milli >= 1000) {
        sec++;
        milli = 0;
    }
    if (sec >= 60) {
        min++;
        sec = 0;
    }

    if (min <= 9) {
        time += "0";
    }
    time += min + ":";

    if (sec <= 9) {
        time += "0";
    }
    
    time += sec + ":";
   
    time += milli / 100;
    $(".clockface").text(time);
}
function runTimer() {
    timerCount();
    milli += 100;
}
$(document).ready(() => {

    // Display Initial 00:00:000
    timerCount();

    // Toggle Menu
    $(".arrow").on("click", () => {
        $(".menu").slideToggle(500);
    })

    // Mouseover Effect for Buttons
    $(".button").on("mouseover", (event) => {
        $(event.currentTarget).addClass("buttonOver");
    }).on("mouseout", (event) => {
        $(event.currentTarget).removeClass("buttonOver");
    });

    // Start the Stopwatch
    $("#start").on("click", () => {
        $("#start").hide();
        $(".hidden").show();
        $("#start-title").hide();
        runTimer();
        run = setInterval(runTimer, 100);
    });

    // Pause or Resume the stopwatch
    $("#stop").on("click", () => {

        // Stops the stopwatch
        if ($("#stop").text() === "Stop") {
            $("#stop").text("Resume");
            $("#lap").text("Reset");
            clearInterval(run);
        }

        // Resumes the stopwatch
        else {
            $("#stop").text("Stop");
            $("#lap").text("Lap");
            runTimer();
            run = setInterval(runTimer, 100);
        }
        
    });

    // Lap or Reset the Stopwatch
    $("#lap").on("click", () => {

        // Resets Stopwatch
        if ($("#lap").text() === "Reset") {
            $("#stop").text("Stop");
            $("#lap").text("Lap");
            $(".hidden").hide();
            milli = 0;
            sec = 0;
            min = 0;
            runTimer();
            $(".laps").empty();
            $("#start").show();
            $("#start-title").show();
        }
        
        // Add a Lap
        else {
            $(".laps").append("<h2>" + time + "</h2>");
            milli = 0;
            sec = 0;
            min = 0;
        }
    });
});