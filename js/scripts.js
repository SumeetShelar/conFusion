$(document).ready(function(){

    // Carousel Time
    $("#mycarousel").carousel( { interval: 2000 } );
    
    // Pause and Play
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass("fa-pause"))
            {
                $("#mycarousel").carousel("pause");
                $("#carouselButton").children("span").removeClass("fa-pause");
                $("#carouselButton").children("span").addClass("fa-play");
            }
        else if ($("#carouselButton").children("span").hasClass("fa-play"))
            {
                $("#mycarousel").carousel("cycle");
                $("#carouselButton").children("span").removeClass("fa-play");
                $("#carouselButton").children("span").addClass("fa-pause");
            }
    });

    // Login
    $("#loginButton").click(function(){
        $("#loginModal").modal("toggle");
    });
    // Reserve
    $("#reserveButton").click(function(){
        $("#modalform").modal("toggle");
    });
});

// Script For Tooltip
// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });