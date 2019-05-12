let sec = 0;
let min = 0;
$("document").ready(() => {

    // Mouseover Effect for Buttons
    $(".button").on("mouseover", (event) => {
        $(event.currentTarget).addClass("buttonOver");
    }).on("mouseout", (event) => {
        $(event.currentTarget).removeClass("buttonOver");
    });

    // Toggle Menu
    $(".arrow").on("click", () => {
        $(".menu").slideToggle(500);
    })
});
