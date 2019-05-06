function getTime() {
    let today = new Date();
    let time = "";
    
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
    if (today.getHours() >= 12){
        time += " PM";
    }
    else {
        time += " AM";
    }

    $(".clockface").text(time);
}

$(document).ready(() => {
    getTime();
    let repeat = setInterval(getTime, 1000);
   /* $(".arrow").on("click", () => {
        $(".menu").slideToggle(400, "linear");
    })*/
});