// Finds and displays the current time
function getTime() {
    let today = new Date();
    let time = "";
    if ($(document).find("title").text() === "Standard Clock") {
        if (today.getHours() % 12 === 0) {
            time = "12:";
        }
        else {
            time = "" + (today.getHours() % 12) + ":";
        }
        if (today.getMinutes() < 10) {
            time += "0" + today.getMinutes();
        }
        else {
            time += today.getMinutes();
        }
        if (today.getHours() >= 12) {
            time += " PM";
        }
        else {
            time += " AM";
        }
    }
    else {
        time = "" + today.getHours()  + ":";
       
        if (today.getMinutes() < 10) {
            time += "0" + today.getMinutes();
        }
        else {
            time += today.getMinutes();
        }
    }

    $(".clockface").text(time);
}

$(document).ready(() => {

    // Get Initial Date
    getTime();

    // Update Clock
    let repeat = setInterval(getTime, 1000);

    // Toggle Menu
    $(".arrow").on("click", () => {
        $(".menu").slideToggle(500);
    })
});