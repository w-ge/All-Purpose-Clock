function getTime() {
    let today = new Date();
    let date = "";
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    date += "" + days[today.getDay()] + ", " + months[today.getMonth()] + today.getDate() + ", " + today.getFullYear();
    $(".datedisplay").text(date);
}

$(document).ready(() => {
    getTime();
    let repeat = setInterval(getTime, 1000);
    $(".arrow").on("click", () => {
        $(".menu").slideToggle(500);
    })
});