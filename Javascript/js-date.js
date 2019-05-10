// Finds and displays the current time
function getTime() {
    let today = new Date();
    let date = "";
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    date += "" + days[today.getDay()] + ", " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
    $(".datedisplay").text(date);
}

$(document).ready(() => {

    // Get Initial Date
    getTime();

    // Update Date
    let repeat = setInterval(getTime, 1000);

    // Toggle Menu
    $(".arrow").on("click", () => {
        $(".menu").slideToggle(500);
    })
});